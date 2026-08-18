# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent ("prompt the user to create
admin credentials", "expose a web UI") to the constructs, the reference pages, and a named production
package to copy. Find the recipe before you read this package's neighbours: a package you reach by
grepping may be non-conformant, and the recipe outranks it.

Freshly scaffolded? Work the
[New Package Checklist](../start-technologies/projects/start-sdk/docs/src/new-package-checklist.md)
(or <https://docs.start9.com/packaging/new-package-checklist.html>) from top to bottom. It is a
guide page, not a file in this repo — read it, don't copy it in.

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes.

**Bugs and feature requests are GitHub issues on this repo** — file them as you find them.
Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **MeTube ships no authentication**, so the only gate is basic auth on the binding in `interfaces.ts`, keyed by a password the `set-password` action generates. `init/watchPassword.ts` raises a `critical` task whenever that password is absent, which is what guarantees the UI never runs ungated — don't downgrade it to `important` or make it install-only.
- **`PUID`/`PGID` are 1000 to match File Browser's uid**, so files MeTube writes into File Browser's volume are usable there without a chown oneshot. Changing them breaks that.
- **`STATE_DIR` is pinned to `/config/.metube`.** The image default puts it under the downloads directory, which would leave the queue and history off the backup and inside the user's media folder.
- **`runAsInit: true` is required.** Each download spawns yt-dlp and ffmpeg; with no init as PID 1 those orphans are never reaped.
