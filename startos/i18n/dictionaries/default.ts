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
  "Where MeTube saves new downloads. Files already downloaded stay where they are.\n- Local storage: kept in MeTube's own storage.\n- NextExplorer: saved into a folder in NextExplorer, where you can browse, download and manage them.\n- FileBrowser Quantum: saved into a folder in FileBrowser Quantum, where you can browse, download and manage them.": 7,
  'Local storage': 8,
  'FileBrowser Quantum': 9,
  'FileBrowser Quantum Subfolder': 10,
  'Folder inside FileBrowser Quantum where downloads are saved. Created automatically; FileBrowser Quantum must be installed.': 11,
  'Select Download Destination': 12,
  'Choose where MeTube saves downloads — locally, or into NextExplorer or FileBrowser Quantum.': 13,

  // actions/setPassword.ts
  'Set Web UI Password': 14,
  'Reset Web UI Password': 15,
  'Generate the password for the MeTube web UI. The username is always "admin". Running this again generates a new password.': 16,

  // init/watchPassword.ts
  'Set a password to protect the MeTube web interface': 17,

  // NextExplorer destination
  NextExplorer: 18,
  'NextExplorer Subfolder': 19,
  'Folder inside NextExplorer where downloads are saved. The first folder is a NextExplorer location, such as Files; MeTube adds it to NextExplorer if it does not exist. NextExplorer must be installed.': 20,
  'The current web UI password stops working, and anyone using MeTube must sign in again with the new one.': 21,
  'Web UI Password Set': 22,
  'Use these credentials to sign in to the MeTube web UI. Save the password now — running this action again generates a new one.': 23,
  Username: 24,
  Password: 25,
  'Cannot start with a slash or contain a .. folder': 26,
  'The first folder is a NextExplorer location: it cannot start with a dot or a space, end with a space, or be _users, personal, share or volumes': 27,
  'Update NextExplorer to 3.1.0:2 or later first.': 28,
  'Install NextExplorer first.': 29,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
