// @flow
import type { Narrative } from './types'
import type {
  NextFunction,
  Result,
  RouteContext,
  Router
} from '../common/types'

import * as data from './data'
import * as narratives from './index'

export const fetchNarratives = async (
  router: Router,
  ctx: RouteContext,
  next: NextFunction
) => {
  const result = await data.fetchAll()
  if (result.ok) {
    narratives.save(result.value)
    next()
  } else {
    router.redirect('/error/500')
  }
}
