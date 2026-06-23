import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec, Value, Variants } = sdk

export const inputSpec = InputSpec.of({
  // A union so the File Browser subfolder field only appears when File Browser
  // is the selected destination — nothing extra to fill in for local storage.
  destination: Value.union({
    name: i18n('Download Destination'),
    description: i18n(
      'Where MeTube saves downloads. "Local storage" keeps them on this service. "File Browser" writes them into File Browser so you can browse, download, and manage the files there.',
    ),
    default: 'local',
    variants: Variants.of({
      local: {
        name: i18n('Local storage'),
        spec: InputSpec.of({}),
      },
      filebrowser: {
        name: i18n('File Browser'),
        spec: InputSpec.of({
          subfolder: Value.text({
            name: i18n('File Browser Subfolder'),
            description: i18n(
              'Folder inside File Browser where downloads are saved. Created automatically; File Browser must be installed.',
            ),
            default: 'metube',
            required: true,
            placeholder: 'metube',
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
      'Choose where MeTube saves downloads — locally, or into File Browser.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  // form input specification
  inputSpec,

  // pre-fill the form with the current values. `other` keeps the last subfolder
  // around so it reappears if the user switches back to File Browser.
  async ({ effects }) => {
    const destination =
      (await storeJson.read((s) => s.downloadDestination).const(effects)) ??
      'local'
    const subfolder =
      (await storeJson.read((s) => s.filebrowserSubpath).const(effects)) ??
      'metube'
    return {
      destination:
        destination === 'filebrowser'
          ? { selection: 'filebrowser' as const, value: { subfolder } }
          : {
              selection: 'local' as const,
              value: {},
              other: { filebrowser: { subfolder } },
            },
    }
  },

  // execution: persist the choice. main.ts + dependencies.ts read these
  // reactively, so saving re-mounts (or unmounts) File Browser, repoints the
  // save path, and restarts the service. Local leaves the stored subfolder
  // untouched so it survives a round-trip.
  async ({ effects, input }) => {
    const dest = input.destination
    if (dest.selection === 'filebrowser') {
      return storeJson.merge(effects, {
        downloadDestination: 'filebrowser',
        filebrowserSubpath: dest.value.subfolder,
      })
    }
    return storeJson.merge(effects, { downloadDestination: 'local' })
  },
)
