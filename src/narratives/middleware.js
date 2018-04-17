// @flow
import type { Narrative } from './types'
import type {
  NextFunction,
  Result,
  RouteContext,
  Router
} from '../common/types'

import * as data from './data'
import * as store from './store'

export const fetchNarrativesWithData = async (
  data: { fetchAll: () => Promise<Result<?(Narrative[])>> },
  router: Router,
  ctx: RouteContext,
  next: NextFunction
) => {
  const result = await data.fetchAll()
  if (result.ok) {
    ctx.store = store.save(result.value)
    next()
  } else {
    router.redirect('/error/500')
  }
}

export const fetchNarratives = fetchNarrativesWithData.bind(null, data)
