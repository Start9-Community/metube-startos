import { sdk } from '../sdk'
import { downloadDestination } from './downloadDestination'
import { setPassword } from './setPassword'

export const actions = sdk.Actions.of()
  .addAction(setPassword)
  .addAction(downloadDestination)
