// @flow

import page from 'page'

import index from './pages/index'

export const map = () => {
  page('/', _ => page.redirect('/1'))
  page('/:id', index)
  page('*', _ => console.log('not found'))
  page()
}
