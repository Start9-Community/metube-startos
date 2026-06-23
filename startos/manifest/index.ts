import { setupManifest } from '@start9labs/start-sdk'
import { filebrowserDescription, long, short } from './i18n'

export const manifest = setupManifest({
  id: 'metube',
  title: 'MeTube',
  license: 'AGPL-3.0',
  packageRepo: 'https://github.com/Start9-Community/metube-startos',
  upstreamRepo: 'https://github.com/alexta69/metube',
  marketingUrl: 'https://github.com/alexta69/metube',
  donationUrl: null,
  docsUrls: ['https://github.com/alexta69/metube/blob/master/README.md'],
  description: { short, long },
  volumes: ['main', 'downloads'],
  images: {
    metube: {
      source: { dockerTag: 'alexta69/metube:2026.04.28' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {
    filebrowser: {
      description: filebrowserDescription,
      optional: true,
      metadata: {
        title: 'File Browser',
        icon: 'https://raw.githubusercontent.com/Start9Labs/filebrowser-startos/fbf1fefb51cca9731f2a9a9e6f790ca150aa9d04/icon.svg',
      },
    },
  },
})
