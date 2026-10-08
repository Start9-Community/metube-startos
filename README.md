<p align="center">
  <img src="icon.png" alt="MeTube Logo" width="21%">
</p>

# MeTube on StartOS

> Everything not listed in this document should behave the same as upstream
> MeTube. If a feature, setting, or behavior is not mentioned here, the upstream
> documentation is accurate and fully applicable — see the Documentation section
> of `instructions.md` for links.

[MeTube](https://github.com/alexta69/metube) is a web front end for yt-dlp: paste a link, pick a format, and it downloads the video or audio to the server. This package adds the login MeTube does not have, and lets downloads land either on its own volume or inside FileBrowser Quantum.

- **Upstream repo:** <https://github.com/alexta69/metube>
- **Wrapper repo:** <https://github.com/Start9-Community/metube-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

One upstream image, consumed unmodified.

| Property      | Value                      |
| ------------- | -------------------------- |
| Image         | `alexta69/metube`          |
| Architectures | x86_64, aarch64            |
| Command       | The image's own entrypoint |

| Subcontainer  | Purpose                                  |
| ------------- | ---------------------------------------- |
| `metube-main` | The only daemon — the one to `attach` to |

**The daemon runs with `runAsInit`**, so the image's init is PID 1. MeTube spawns a yt-dlp process per download and ffmpeg behind it; without an init to reap them, those orphans accumulate for the life of the container.

The entrypoint creates and chowns the download, temp, and state directories (not their parents), then drops privileges. The one oneshot, `nextexplorer-location`, runs only while NextExplorer is the destination (see Dependencies); it shares the `metube-main` subcontainer.

## Volume and Data Layout

Two volumes, and only one of them is backed up.

| Volume      | Mount Point  | Purpose                                |
| ----------- | ------------ | -------------------------------------- |
| `main`      | `/config`    | The queue, the history, and the store  |
| `downloads` | `/downloads` | Downloaded media, for the local option |

| Path         | Written by | Holds                                    |
| ------------ | ---------- | ---------------------------------------- |
| `.metube/`   | MeTube     | The download queue and completed history |
| `store.json` | Actions    | The password and the destination choice  |

**The state directory is pinned onto `main` rather than left at its default**, which is inside the downloads directory. That is what puts the queue and history on a volume that gets backed up, and keeps them out of the media directory the user browses.

**The temp directory is the download directory**, so partly-downloaded files sit beside finished ones and are cleaned up as each download completes.

## File Models

One model, four fields.

| File         | Format | Modelled                | Written by |
| ------------ | ------ | ----------------------- | ---------- |
| `store.json` | JSON   | Yes — `FileHelper.json` | Actions    |

- **The web UI password**, absent until the action generates it.
- **The download destination**, `local`, `nextexplorer` or `filebrowser`, defaulting to local so the service works with no setup.
- **The NextExplorer and FileBrowser Quantum subfolders**, kept even while unselected so switching back restores the previous choice. NextExplorer's starts with one of its locations, `Files/metube` by default.

All four are read reactively, which is what makes the destination switch take effect: changing it restarts the service, re-mounts, and repoints the download path in one step.

MeTube's own settings — formats, naming, post-processing — are its business and are not modelled here.

## Dependencies

Two, both optional, and **enabled only while selected**.

| Dependency          | Required            | Kind     | Mounted                                   | Why                      |
| ------------------- | ------------------- | -------- | ----------------------------------------- | ------------------------ |
| NextExplorer        | No — only if chosen | `exists` | `data`, read-write at `/mnt/nextexplorer` | Downloads land inside it |
| FileBrowser Quantum | No — only if chosen | `exists` | `data`, read-write at `/mnt/filebrowser`  | Downloads land inside it |

Choosing a service as the destination enables its dependency; choosing local disables it again. Nothing is mounted while the destination is local.

**The `filebrowser` range takes both lines that use that id** — `>=2.63.18:3 || >=#quantum:1.5.2:0`, File Browser and its `#quantum` flavor. Both serve their `data` volume as uid 1000.

**The first folder of the NextExplorer subfolder is a NextExplorer location, and NextExplorer creates it.** Each top-level directory of NextExplorer's `data` volume is a location. When NextExplorer is chosen, Select Download Destination declares the dependency and runs NextExplorer's `add-location` for that folder (`access: 'dependent'`; an existing location is a success for a service caller) before it writes the store, so the new location exists, owned by uid 1000, before the service restarts into it. That is why the range is `>=3.1.0:2`, the first release with a dependent-callable `add-location`. The action refuses the choice, keeping the previous one, if NextExplorer is not installed, is older, or rejects the name. `add-location` runs only from the action: its form and run must share an event id, which an init or `main` does not have.

**A `nextexplorer-location` oneshot runs before the daemon** while NextExplorer is the destination: `install -d -o 1000 -g 1000` on the location. It covers a stored location that no longer exists (removed in NextExplorer, or never added by an older release), which the image's `mkdir -p` would otherwise create as root.

**The dependency is `exists`, not `running`.** MeTube writes into the service's volume directly, so it only has to be installed for the files to land in the right place — it has to be running for anyone to browse them.

Files are written as the same uid both services serve their volume with, so they are readable and manageable there immediately rather than needing an ownership fix.

## Network Access and Interfaces

One interface.

| Interface | Id   | Type | Port | Description              |
| --------- | ---- | ---- | ---- | ------------------------ |
| Web UI    | `ui` | ui   | 8081 | The MeTube web interface |

**MeTube has no login of its own.** The whole interface is gated by HTTP basic auth applied at the StartOS reverse proxy, with the username `admin` and the generated password — the application never learns about it. The gate rides on the interface's TLS address, which is the one StartOS publishes for the LAN.

The gate is configured from the same reactive read as everything else, so setting or rotating the password takes effect without any further action.

## Installation and First-Run Flow

Install leaves the destination at local and raises a `critical` task to generate the web UI password.

**The service cannot start until that password exists**, which is the point: a `critical` task blocks startup, so there is never a window where MeTube is running and reachable with no credential. The check runs on every init, not just install, so clearing the password re-raises it.

Once the password is set the service starts and downloads work immediately. Switching the destination to NextExplorer or FileBrowser Quantum is optional and can be done at any time.

## Actions

Two actions.

### Set Web UI Password

Generates the basic-auth password and shows it once. The name changes to **Reset Web UI Password** once one exists.

- **What it changes:** the password in the store, and through it the credential on the interface.
- **Cost:** the service restarts, since the binding is rebuilt.
- **Repeat safety:** each run generates a **new** password and invalidates the old one. It is never user-chosen. Once a password exists, the action asks for confirmation before it runs.
- **Outputs:** the fixed username and the new password.

### Select Download Destination

Chooses between this service's own volume and a folder inside NextExplorer or FileBrowser Quantum.

- **What it changes:** the destination, and the subfolder name when a service is chosen. For NextExplorer, the subfolder's first folder becomes a NextExplorer location if it is missing, and the action fails without saving if NextExplorer is missing, too old, or refuses the name (see Dependencies).
- **Input rules:** neither subfolder may start with `/` or contain a `..` folder. NextExplorer's first folder follows NextExplorer's own location-name rules: no leading dot or space, no trailing space, and not `_users`, `personal`, `share` or `volumes` in any case.
- **Cost:** the service restarts and the mount changes.
- **Repeat safety:** idempotent, and pre-filled with the current choice.
- **What it does not do:** **move anything.** Files already downloaded stay where they were written; only new downloads follow the new destination.

## Tasks

One, and it is reactive.

| Task                | Severity   | Raised when                     | Cleared when    |
| ------------------- | ---------- | ------------------------------- | --------------- |
| Set Web UI Password | `critical` | Any init that finds no password | The action runs |

`critical` blocks the service from starting and suspends the ordinary controls, so a fresh install shows the task and nothing else.

## Health Checks

One check, on the only daemon.

| Check     | Displayed as    | Method                 | Grace |
| --------- | --------------- | ---------------------- | ----- |
| `primary` | "Web Interface" | Port 8081 is listening | 30s   |

It reports that the interface is serving. **It says nothing about downloads**: a failing yt-dlp, an unreachable site, or a full volume all show a green check and an error against the individual item in the queue.

## Backups and Restore

**Only `main` is backed up** — `sdk.Backups.ofVolumes('main')`. That is the queue, the completed history, the password, and the destination choice.

**Downloaded media is deliberately excluded.** A media library is large, and it is re-downloadable by definition; backing it up would make every backup as big as the collection. Anything worth keeping should be moved off this volume — which is what the NextExplorer and FileBrowser Quantum destinations are for, since those files then live under that service's own backup.

A restored instance comes back with the same password, the same destination, and its history intact, pointing at an empty `downloads` volume unless the destination was NextExplorer or FileBrowser Quantum.

## Limitations and Differences

1. **Authentication is the reverse proxy's, not MeTube's.** One shared credential, username always `admin`, password generated rather than chosen.
2. **Downloaded media is not backed up** when the destination is local.
3. **Switching destination does not move existing files.**
4. **The NextExplorer or FileBrowser Quantum subfolder is created under that service's data volume**, so its contents count against its backup, not this one.
5. **MeTube's own settings are not exposed** as actions — formats and naming are set in its interface.
6. **One destination at a time.** There is no per-download choice.

---

## Quick Reference for AI Consumers

```yaml
package_id: metube
image: alexta69/metube
architectures:
  - x86_64
  - aarch64
subcontainers:
  - metube-main # runAsInit: true, so the image's init reaps yt-dlp/ffmpeg orphans
volumes:
  main: /config # queue + history (STATE_DIR) and store.json
  downloads: /downloads # local destination only; not backed up
file_models:
  - store.json # uiPassword, downloadDestination, nextexplorerSubpath, filebrowserSubpath
startos_managed_env_vars:
  - PUID
  - PGID
  - PORT
  - DOWNLOAD_DIR
  - TEMP_DIR
  - STATE_DIR
dependencies:
  - nextexplorer # optional, kind: exists, '>=3.1.0:2', enabled only while it is the destination; download-destination runs its add-location
  - filebrowser # optional, kind: exists, '>=2.63.18:3 || >=#quantum:1.5.2:0', enabled only while it is the destination
interfaces:
  ui: { type: ui, port: 8081 } # basic auth at the StartOS proxy, user "admin"
actions:
  - set-password
  - download-destination
tasks:
  - { action: set-password, severity: critical } # reactive
health_checks:
  - primary # displayed "Web Interface"; says nothing about downloads
```
