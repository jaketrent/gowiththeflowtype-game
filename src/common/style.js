// @flow

import type { Css, Props } from './types'

export default (css: Css) => (fn: Props => TemplateResult) => (props: ?Props) =>
  fn({ ...props, css: { ...(props || {}).css, ...css } })
