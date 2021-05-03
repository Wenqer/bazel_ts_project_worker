import { identity } from 'fp-ts/lib/function'
import { time } from './time'

export const variable = identity(time)
