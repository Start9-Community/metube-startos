export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting MeTube': 0,
  'Web Interface': 1,
  'The web interface is ready': 2,
  'The web interface is not ready': 3,

  // interfaces.ts
  'Web UI': 4,
  'The web interface of MeTube': 5,

  // actions/downloadDestination.ts
  'Download Destination': 6,
  'Where MeTube saves downloads. "Local storage" keeps them on this service. "File Browser" writes them into File Browser so you can browse, download, and manage the files there.': 7,
  'Local storage': 8,
  'File Browser': 9,
  'File Browser Subfolder': 10,
  'Folder inside File Browser where downloads are saved. Created automatically; File Browser must be installed.': 11,
  'Select Download Destination': 12,
  'Choose where MeTube saves downloads — locally, or into File Browser.': 13,

  // actions/setPassword.ts
  'Set Web UI Password': 14,
  'Reset Web UI Password': 15,
  'Generate the password for the MeTube web UI. The username is always "admin". Running this again generates a new password.': 16,

  // init/watchPassword.ts
  'Set a password to protect the MeTube web interface': 17,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
