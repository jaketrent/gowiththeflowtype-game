// @flow

import { html, render } from 'lit-html'

import type { Props, RouteContext, Router } from '../common/types'

import { link, title } from '../common'

type ErrorProps = {
  code: string
} & Props

export const error = (props: ErrorProps): TemplateResult => html`
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
