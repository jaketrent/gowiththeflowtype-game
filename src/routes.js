// @flow

import type { NextFunction, RouteContext, Router } from './common/types'

import page from 'page'

import { fetchNarratives } from './narratives/middleware'
import index from './pages/index'
import error from './pages/error'

export const routeWithPage = (
  page: page,
  path: string,
  ...middleware: ((Router, RouteContext, NextFunction) => mixed)[]
) => page(path, ...middleware.map(m => m.bind(null, page)))

const route = routeWithPage.bind(null, page)

export const map = () => {
  route('/', router => router.redirect('/0'))
  route('/:id', fetchNarratives, index)
  route('/error/:code', error)
  route('*', error)
  page()
}
