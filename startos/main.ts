import { manifest as filebrowserManifest } from 'filebrowser-startos/startos/manifest'
import { storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { filebrowserMountpoint, uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting MeTube'))

  // Download destination (set via the "Select Download Destination" action),
  // read reactively so switching it restarts the service and re-mounts. The web
  // UI password gate is enforced by a critical task (init/watchPassword.ts) that
  // blocks startup until it is set, so there is nothing to check here.
  const store = await storeJson.read().const(effects)
  const downloadDestination = store?.downloadDestination
  const filebrowserSubpath = store?.filebrowserSubpath

  let mounts = sdk.Mounts.of()
    // MeTube's queue/history state (STATE_DIR below) + StartOS store.json.
    .mountVolume({
      volumeId: 'main',
      subpath: null,
      mountpoint: '/config',
      readonly: false,
    })
    // Downloaded media for the local destination.
    .mountVolume({
      volumeId: 'downloads',
      subpath: null,
      mountpoint: '/downloads',
      readonly: false,
    })

  // The directory handed to MeTube as DOWNLOAD_DIR. Local downloads stay on this
  // service's own `downloads` volume; File Browser downloads go into a subfolder
  // of File Browser's data volume, mounted read-write here. File Browser serves
  // that volume as uid 1000 — the same uid MeTube's PUID drops to — so files
  // MeTube writes are immediately readable and manageable there.
  let downloadDir = '/downloads'
  if (downloadDestination === 'filebrowser') {
    const subfolder =
      (filebrowserSubpath ?? 'metube').replace(/^\/+|\/+$/g, '') || 'metube'
    downloadDir = `${filebrowserMountpoint}/${subfolder}`
    mounts = mounts.mountDependency<typeof filebrowserManifest>({
      dependencyId: 'filebrowser',
      volumeId: 'data',
      subpath: null,
      mountpoint: filebrowserMountpoint,
      readonly: false,
    })
  }

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: await sdk.SubContainer.of(
      effects,
      { imageId: 'metube' },
      mounts,
      'metube-main',
    ),
    exec: {
      command: sdk.useEntrypoint(),
      // runAsInit so the image's tini is PID 1 and reaps zombies — MeTube spawns
      // yt-dlp/ffmpeg subprocesses, and without an init those orphans leak.
      runAsInit: true,
      // The image entrypoint creates and chowns DOWNLOAD_DIR/TEMP_DIR/STATE_DIR
      // to PUID:PGID then drops privileges with gosu, so no ownership one-shot is
      // needed. PUID/PGID = 1000 match File Browser's uid. STATE_DIR is pinned to
      // the `main` volume (not the image default /downloads/.metube) so MeTube's
      // queue/history are included in backups. PORT pins MeTube's listen port to
      // the interface + health check.
      env: {
        PUID: '1000',
        PGID: '1000',
        PORT: String(uiPort),
        DOWNLOAD_DIR: downloadDir,
        TEMP_DIR: downloadDir,
        STATE_DIR: '/config/.metube',
      },
    },
    ready: {
      display: i18n('Web Interface'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('The web interface is ready'),
          errorMessage: i18n('The web interface is not ready'),
        }),
      gracePeriod: 30_000,
    },
    requires: [],
  })
})
