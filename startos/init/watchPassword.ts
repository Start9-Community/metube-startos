import { setPassword } from '../actions/setPassword'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

// MeTube has no login of its own. If no web-UI password is set, surface a
// critical task pointing at the "Set Web UI Password" action. A critical task
// blocks the service from starting until it is completed, so the UI is never
// exposed unauthenticated.
export const watchPassword = sdk.setupOnInit(async (effects) => {
  const password = await storeJson.read((s) => s?.uiPassword).const(effects)
  if (!password) {
    await sdk.action.createOwnTask(effects, setPassword, 'critical', {
      reason: i18n('Set a password to protect the MeTube web interface'),
    })
  }
})
