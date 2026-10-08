import { ExtendedVersion, T, VersionRange } from '@start9labs/start-sdk'
import { storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import {
  filebrowserDescription,
  nextexplorerDescription,
} from './manifest/i18n'
import { sdk } from './sdk'

// From the release whose add-location a dependent may run.
const nextexplorerVersionRange = '>=3.1.0:2'

// add-location admits only a declared dependent, and its form and run must share an event id, which only an action has.
export const addNextexplorerLocation = async (
  effects: T.Effects,
  location: string,
) => {
  if (!(await sdk.getInstalledPackages(effects)).includes('nextexplorer')) {
    throw new Error(i18n('Install NextExplorer first.'))
  }
  const version = await sdk
    .getServiceManifest(effects, 'nextexplorer', (m) => m?.version ?? '')
    .once()
  if (
    !version ||
    !ExtendedVersion.parse(version).satisfies(
      VersionRange.parse(nextexplorerVersionRange),
    )
  ) {
    throw new Error(i18n('Update NextExplorer to 3.1.0:2 or later first.'))
  }
  const previous = await effects.getDependencies()
  if (!previous.some((d) => d.id === 'nextexplorer')) {
    await effects.setDependencies({
      dependencies: [
        ...previous,
        {
          id: 'nextexplorer',
          kind: 'exists',
          versionRange: nextexplorerVersionRange,
        },
      ],
    })
  }
  try {
    await sdk.action.run({
      effects,
      packageId: 'nextexplorer',
      actionId: 'add-location',
      input: () => ({ name: location }),
    })
  } catch (e) {
    await effects.setDependencies({ dependencies: previous })
    throw e
  }
}

export const dependencies = sdk.Dependencies.of()
  .addDependency(
    sdk.Dependency.optional('nextexplorer', {
      description: nextexplorerDescription,
      metadata: {
        title: 'NextExplorer',
        icon: 'https://raw.githubusercontent.com/Start9Labs/nextexplorer-startos/04f7ecbfc31ad2205e0222dd7568fb881aa06c79/icon.svg',
      },
      versionRange: nextexplorerVersionRange,
      kind: 'exists',
      enabled: async ({ effects }) =>
        (await storeJson.read((s) => s.downloadDestination).const(effects)) ===
        'nextexplorer',
    }),
  )
  .addDependency(
    sdk.Dependency.optional('filebrowser', {
      description: filebrowserDescription,
      metadata: {
        title: 'FileBrowser Quantum',
        icon: 'https://raw.githubusercontent.com/Start9Labs/filebrowser-quantum-startos/e936a6c85a97b930b43cad5e9c0dd4898a2df567/icon.svg',
      },
      versionRange: '>=2.63.18:3 || >=#quantum:1.5.2:0',
      kind: 'exists',
      enabled: async ({ effects }) =>
        (await storeJson.read((s) => s.downloadDestination).const(effects)) ===
        'filebrowser',
    }),
  )
