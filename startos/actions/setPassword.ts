import { utils } from '@start9labs/start-sdk'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { randomPassword, uiUsername } from '../utils'

// MeTube has no login of its own; this generates the password for the StartOS
// proxy's basic-auth gate on the web UI (see interfaces.ts). Auto-generated,
// never user-typed; the same action rotates it later. interfaces.ts and main.ts
// read it reactively, so saving applies the new credential and starts/restarts
// the service automatically.
export const setPassword = sdk.Action.withoutInput(
  'set-password',

  async ({ effects }) => {
    // Once a password exists, this action rotates it rather than creating it.
    const alreadySet = !!(await storeJson
      .read((s) => s?.uiPassword)
      .const(effects))
    return {
      name: alreadySet
        ? i18n('Reset Web UI Password')
        : i18n('Set Web UI Password'),
      description: i18n(
        'Generate the password for the MeTube web UI. The username is always "admin". Running this again generates a new password.',
      ),
      warning: null,
      allowedStatuses: 'any',
      group: null,
      visibility: 'enabled',
    }
  },

  async ({ effects }) => {
    const password = utils.getDefaultString(randomPassword)
    await storeJson.merge(effects, { uiPassword: password })

    return {
      version: '1' as const,
      title: 'Web UI Password Set',
      message:
        'Use these credentials to sign in to the MeTube web UI. Save the password now — running this action again generates a new one.',
      result: {
        type: 'group' as const,
        value: [
          {
            type: 'single' as const,
            name: 'Username',
            description: null,
            value: uiUsername,
            masked: false,
            copyable: true,
            qr: false,
          },
          {
            type: 'single' as const,
            name: 'Password',
            description: null,
            value: password,
            masked: true,
            copyable: true,
            qr: false,
          },
        ],
      },
    }
  },
)
