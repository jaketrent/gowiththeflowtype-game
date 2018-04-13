// @flow

import { html, render } from 'lit-html'

import type { RouteContext, Router } from '../common/types'

import { link, title } from '../common'

const error = props => html`
  <div class="error__content">
    <div class="error__text">Your story has ended in an error.</div>
    <div class="error__code">${props.code}</div>
    <a href="/" class="error__start">Start over?</a>
  </div>
`

export default (_: Router, ctx: RouteContext) => {
  render(
    error({ code: ctx.params.code || '404' }),
    document.getElementById('app')
  )
}
