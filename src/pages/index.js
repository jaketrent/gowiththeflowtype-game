// @flow

import { html, render } from 'lit-html'

import type { RouteContext, Router } from '../common/types'

import * as narratives from '../narratives'
import { link, title } from '../common'

const prompt = ({ css, narrative }) =>
  narrative.prompt &&
  html`
  <div class="index__prompt">
    ${narrative.prompt}
  </div>
`

const text = ({ css, narrative }) => html`
  <p class="index__text">${narrative.text}</p>
`

const choice = ({ css, narrative }) => html`
 <div class="index__choice">
    ${link({
      className: 'index__choice-button',
      href: '/' + narrative.id,
      label: narrative.choiceText
    })}
  </div>
`

const choices = props =>
  html`
  <div>
    ${narratives
      .getChoices(props.narrative)
      .map(n => choice({ ...props, narrative: n }))}
  </div>
`

const index = props => html`
  <div class="index">
    ${title({ narrative: props.narrative })}
    <div class="index__content">
      <div>
        ${text(props)}
      </div>
      <div>
        ${prompt(props)}
        ${choices(props)}
      </div>
    </div>
  </div>
`

export default (router: Router, ctx: RouteContext) => {
  const narrative = narratives.find(ctx.params.id)
  if (narrative) render(index({ narrative }), document.getElementById('app'))
  else router.redirect('/error/404')
}
