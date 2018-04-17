// @flow
import defaultFetch from 'node-fetch'

import type { Narrative } from './types'
import type {
  NextFunction,
  Result,
  RouteContext,
  Router
} from '../common/types'

export const fetchAll = async (
  fetch: defaultFetch = defaultFetch
): Promise<Result<?(Narrative[])>> => {
  try {
    const res = await fetch('http://localhost:1338/api/v1/narratives')
    const json = await res.json()
    return { ok: true, value: json }
  } catch (error) {
    return { ok: false, error }
  }
}
