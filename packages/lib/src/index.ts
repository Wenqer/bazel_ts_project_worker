import { function as fn } from 'fp-ts'
import { time } from './time'

export const variable = fn.identity(time)
