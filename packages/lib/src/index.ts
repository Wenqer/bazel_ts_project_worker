import { function as fn } from 'fp-ts'
import { fooTime } from './foo'
import { barTime } from './bar'

export const variable = fn.identity(fooTime + barTime)
