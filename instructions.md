# MeTube Instructions

MeTube is a web UI for [yt-dlp](https://github.com/yt-dlp/yt-dlp). Paste a video or
playlist URL, pick a format and quality, and MeTube downloads the media to your server.

## Documentation

- [MeTube README](https://github.com/alexta69/metube/blob/master/README.md) — upstream
  documentation covering supported sites, formats, and options.

## Getting Started

1. **Set a web UI password.** On install, a critical task prompts you to run **"Set Web UI
   Password"**. Run it — MeTube generates a password and shows it once (the username is
   always `admin`). MeTube has no login of its own, so the StartOS proxy uses this to protect
   the UI, and the service won't start until it is set.
2. **Open the Web UI** from the StartOS interface link and sign in with `admin` and the
   password from step 1.
3. **Paste a URL**, choose the format/quality, and click **Add** to start a download.
   Completed files appear in the **Downloads** list, where you can play or download them.

## Web UI password

MeTube has no built-in login, so access is protected by a password at the StartOS proxy
(username `admin`). Run **"Set Web UI Password"** (shown as **"Reset Web UI Password"**
afterward) anytime to generate a new one. Resetting asks for confirmation first, since the
current password stops working. The new one is shown once in the action result, so save it.
A lost password can't be recovered; just reset it.

## Where downloads are saved

By default, downloads are saved on MeTube's own storage and are **not** included in
backups (only MeTube's download queue and history are backed up). You can change where
new downloads go with the **"Select Download Destination"** action:

- **Local storage** (default) — files are kept on the service's `downloads` volume.
- **NextExplorer** (recommended) — files are written into [NextExplorer](https://github.com/Start9Labs/nextexplorer-startos)
  so you can browse, open, download, and manage them from NextExplorer's UI.
- **FileBrowser Quantum** — the same, into [FileBrowser Quantum](https://github.com/Start9Labs/filebrowser-quantum-startos).

### Saving downloads into NextExplorer or FileBrowser Quantum

1. Install and start **NextExplorer** or **FileBrowser Quantum** first.
2. Run the **"Select Download Destination"** action on MeTube.
3. Choose the service and (optionally) change the subfolder. For FileBrowser Quantum it is
   relative to the storage root (default `metube`). For NextExplorer the first folder is a
   NextExplorer location (default `Files/metube`, in the `Files` location); if that location
   does not exist, MeTube adds it to NextExplorer for you. NextExplorer needs to be version
   3.1.0:2 or later.
4. MeTube now saves there at that subfolder. The folder appears in that service
   automatically, and new downloads show up there as they complete.

If NextExplorer isn't installed, is older than 3.1.0:2, or refuses the location name, the
action says so and keeps your previous destination. A subfolder can't start with `/` or
contain a `..` folder.

To go back, run the action again and choose **Local storage**.

Notes:

- Changing the destination affects **new** downloads only — it does not move files you
  have already downloaded.
- NextExplorer and FileBrowser Quantum are **optional** dependencies: MeTube runs standalone
  with local storage, and a service only becomes required while it is the selected destination.
  MeTube runs as uid `1000`, the same uid both services use, so files MeTube writes are
  immediately browsable and manageable there.

## Important Notes

- **Backups**: MeTube's download **queue and history** are stored on the `main` volume and
  are included in backups. The downloaded **media files** are not backed up — they are
  large and can be re-downloaded. If you want your media included in a wider backup
  strategy, save downloads into NextExplorer or FileBrowser Quantum and back that up.
- **Supported sites and formats**: MeTube is a front-end for yt-dlp; the sites, formats,
  and quality options it supports are whatever yt-dlp supports. See the upstream README.
