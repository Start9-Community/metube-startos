import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'metube',
  title: 'MeTube',
  license: 'AGPL-3.0',
  packageRepo: 'https://github.com/Start9-Community/metube-startos',
  upstreamRepo: 'https://github.com/alexta69/metube',
  marketingUrl: 'https://github.com/alexta69/metube',
  donationUrl: null,
  description: { short, long },
  volumes: ['main', 'downloads'],
  images: {
    metube: {
      source: { dockerTag: 'alexta69/metube:2026.09.29' },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
