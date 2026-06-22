import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

// Where new downloads are saved. 'local' keeps them on this service's own
// `downloads` volume (/downloads); 'filebrowser' writes them into File Browser's
// data volume so the files are browsable there. Set via the "Select Download
// Destination" action; read reactively in main.ts + dependencies.ts so changing
// it restarts the service and re-mounts. Defaults to 'local' so MeTube works out
// of the box with no first-run setup.
const shape = z.object({
  downloadDestination: z.enum(['local', 'filebrowser']).catch('local'),
  // Subfolder inside File Browser's volume to save into (ignored when local).
  filebrowserSubpath: z.string().catch('metube'),
  // Password for the StartOS reverse-proxy basic-auth gate on the web UI. MeTube
  // ships no auth of its own, so without this the UI is unprotected — a critical
  // task blocks startup until it is set, and interfaces.ts reads it reactively to
  // apply the gate. Set/rotated via the "Set Web UI Password" action.
  uiPassword: z.string().optional().catch(undefined),
})

export const storeJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: './store.json' },
  shape,
)
