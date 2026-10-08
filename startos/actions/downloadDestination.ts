import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { addNextexplorerLocation } from '../dependencies'
import {
  locationOf,
  nextexplorerLocationPattern,
  subfolderPattern,
} from '../utils'

const { InputSpec, Value, Variants } = sdk

export const inputSpec = InputSpec.of({
  // A union so the FileBrowser Quantum subfolder field only appears when FileBrowser Quantum
  // is the selected destination — nothing extra to fill in for local storage.
  destination: Value.union({
    name: i18n('Download Destination'),
    description: i18n(
      "Where MeTube saves new downloads. Files already downloaded stay where they are.\n- Local storage: kept in MeTube's own storage.\n- NextExplorer: saved into a folder in NextExplorer, where you can browse, download and manage them.\n- FileBrowser Quantum: saved into a folder in FileBrowser Quantum, where you can browse, download and manage them.",
    ),
    default: 'local',
    variants: Variants.of({
      local: {
        name: i18n('Local storage'),
        spec: InputSpec.of({}),
      },
      nextexplorer: {
        name: i18n('NextExplorer'),
        spec: InputSpec.of({
          subfolder: Value.text({
            name: i18n('NextExplorer Subfolder'),
            description: i18n(
              'Folder inside NextExplorer where downloads are saved. The first folder is a NextExplorer location, such as Files; MeTube adds it to NextExplorer if it does not exist. NextExplorer must be installed.',
            ),
            default: 'Files/metube',
            required: true,
            placeholder: 'Files/metube',
            patterns: [subfolderPattern, nextexplorerLocationPattern],
          }),
        }),
      },
      filebrowser: {
        name: i18n('FileBrowser Quantum'),
        spec: InputSpec.of({
          subfolder: Value.text({
            name: i18n('FileBrowser Quantum Subfolder'),
            description: i18n(
              'Folder inside FileBrowser Quantum where downloads are saved. Created automatically; FileBrowser Quantum must be installed.',
            ),
            default: 'metube',
            required: true,
            placeholder: 'metube',
            patterns: [subfolderPattern],
          }),
        }),
      },
    }),
  }),
})

export const downloadDestination = sdk.Action.withInput(
  // id
  'download-destination',

  // metadata
  async ({ effects }) => ({
    name: i18n('Select Download Destination'),
    description: i18n(
      'Choose where MeTube saves downloads — locally, or into NextExplorer or FileBrowser Quantum.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  // form input specification
  inputSpec,

  // pre-fill the form with the current values. `other` keeps the last subfolder
  // around so it reappears if the user switches back to FileBrowser Quantum.
  async ({ effects }) => {
    const destination =
      (await storeJson.read((s) => s.downloadDestination).const(effects)) ??
      'local'
    const subfolder =
      (await storeJson.read((s) => s.filebrowserSubpath).const(effects)) ??
      'metube'
    const nextexplorerSubfolder =
      (await storeJson.read((s) => s.nextexplorerSubpath).const(effects)) ??
      'Files/metube'
    return {
      destination:
        destination === 'nextexplorer'
          ? {
              selection: 'nextexplorer' as const,
              value: { subfolder: nextexplorerSubfolder },
              other: { filebrowser: { subfolder } },
            }
          : destination === 'filebrowser'
            ? {
                selection: 'filebrowser' as const,
                value: { subfolder },
                other: { nextexplorer: { subfolder: nextexplorerSubfolder } },
              }
            : {
                selection: 'local' as const,
                value: {},
                other: {
                  nextexplorer: { subfolder: nextexplorerSubfolder },
                  filebrowser: { subfolder },
                },
              },
    }
  },

  // execution: persist the choice. main.ts + dependencies.ts read these
  // reactively, so saving re-mounts (or unmounts) FileBrowser Quantum, repoints the
  // save path, and restarts the service. Local leaves the stored subfolder
  // untouched so it survives a round-trip.
  async ({ effects, input }) => {
    const dest = input.destination
    if (dest.selection === 'nextexplorer') {
      // Before the store names it, so the image's mkdir -p never creates a location as root.
      await addNextexplorerLocation(effects, locationOf(dest.value.subfolder))
      return storeJson.merge(effects, {
        downloadDestination: 'nextexplorer',
        nextexplorerSubpath: dest.value.subfolder,
      })
    }
    if (dest.selection === 'filebrowser') {
      return storeJson.merge(effects, {
        downloadDestination: 'filebrowser',
        filebrowserSubpath: dest.value.subfolder,
      })
    }
    return storeJson.merge(effects, { downloadDestination: 'local' })
  },
)
