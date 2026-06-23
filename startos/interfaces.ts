import { storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort, uiUsername } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  // MeTube has no authentication of its own, so the StartOS reverse proxy gates
  // the whole UI port with HTTP basic auth. Read the password reactively so the
  // gate applies as soon as it is set via the "Set Web UI Password" action. A
  // critical task (init/watchPassword.ts) blocks startup until the password is
  // set, so there is never a running, ungated UI.
  const password = await storeJson.read((s) => s?.uiPassword).const(effects)

  const uiMulti = sdk.MultiHost.of(effects, 'ui-multi')
  const uiMultiOrigin = await uiMulti.bindPort(uiPort, {
    protocol: 'http',
    addSsl: password
      ? {
          auth: {
            type: 'basic',
            credentials: [{ username: uiUsername, password }],
            realm: 'MeTube',
          },
        }
      : undefined,
  })
  const ui = sdk.createInterface(effects, {
    name: i18n('Web UI'),
    id: 'ui',
    description: i18n('The web interface of MeTube'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })

  const uiReceipt = await uiMultiOrigin.export([ui])

  return [uiReceipt]
})
