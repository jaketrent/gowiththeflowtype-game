// @flow

import page from 'page'

import index from './pages/index'
import error from './pages/error'

export const map = () => {
  page('/', _ => page.redirect('/0'))
  page('/:id', index)
  page('/error/:code', error)
  page('*', _ => error)
  page()
}
