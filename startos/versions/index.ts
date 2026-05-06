import { VersionGraph } from '@start9labs/start-sdk'
import { v_2026_04_28_0 } from './v2026.04.28.0'
import { v_2026_04_21_0 } from './v2026.04.21.0'
import { v_2026_04_18_1 } from './v2026.04.18.1'
import { v_2026_04_18_0 } from './v2026.04.18.0'

export const versionGraph = VersionGraph.of({
  current: v_2026_04_28_0,
  other: [v_2026_04_21_0, v_2026_04_18_1, v_2026_04_18_0],
})
