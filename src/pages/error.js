// @flow

import { html, render } from 'lit-html'

import type { RouteContext, Router } from '../common/types'

import css from './error.css'
import { link, style, title } from '../common'

const error = style(css)(
  props => html`
  <div class="${props.css.content}">
    <div class="${props.css.text}">Your story has ended in an error.</div>
    <div class="${props.css.code}">${props.code}</div>
    <a href="/" class="${props.css.start}">Start over?</a>
  </div>
`
)

export default (_: Router, ctx: RouteContext) => {
  render(
    error({ code: ctx.params.code || '404' }),
    document.getElementById('app')
  )
}
