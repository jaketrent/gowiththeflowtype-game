// @flow

import type { RouteContext, Router } from './common/types'

import page from 'page'

import index from './pages/index'
import error from './pages/error'

const route = (
  path: string,
  ...middleware: ((Router, RouteContext) => void)[]
) => page(path, ...middleware.map(m => m.bind(null, page)))

export const map = () => {
  route('/', router => router.redirect('/0'))
  route('/:id', index)
  route('/error/:code', error)
  route('*', error)
  page()
}
