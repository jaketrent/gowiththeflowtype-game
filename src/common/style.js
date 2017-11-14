// @flow

import type { Css, Props } from './types'

export default (css: Css) => (fn: Function) => (props: ?Props) =>
  fn({ ...props, css: { ...(props || {}).css, ...css } })
