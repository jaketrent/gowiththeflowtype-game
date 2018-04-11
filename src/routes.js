// @flow

import type { RouteContext, Router } from './common/types'

import page from 'page'

import index from './pages/index'
import error from './pages/error'

const route = (path: string, handler: (Router, RouteContext) => void) =>
  page(path, (ctx: RouteContext) => handler(page, ctx))

export const map = () => {
  route('/', page => page.redirect('/0'))
  route('/:id', index)
  route('/error/:code', error)
  route('*', error)
  page()
}
