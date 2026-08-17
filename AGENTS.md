# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (technical reference for an AI support or administering agent) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **MeTube ships no authentication**, so the only gate is basic auth on the binding in `interfaces.ts`, keyed by a password the `set-password` action generates. `init/watchPassword.ts` raises a `critical` task whenever that password is absent, which is what guarantees the UI never runs ungated — don't downgrade it to `important` or make it install-only.
- **`PUID`/`PGID` are 1000 to match File Browser's uid**, so files MeTube writes into File Browser's volume are usable there without a chown oneshot. Changing them breaks that.
- **`STATE_DIR` is pinned to `/config/.metube`.** The image default puts it under the downloads directory, which would leave the queue and history off the backup and inside the user's media folder.
- **`runAsInit: true` is required.** Each download spawns yt-dlp and ffmpeg; with no init as PID 1 those orphans are never reaped.
