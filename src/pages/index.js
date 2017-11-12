// @flow

import { html, render } from 'lit-html'
import page from 'page'

import type { RouteContext } from '../common/types'

import css from './index.css'
import * as narratives from '../narratives'
import { style, title } from '../common'

const prompt = ({ css, narrative }) =>
  narrative.prompt &&
  html`
  <div class=${css.prompt}>
    ${narrative.prompt}
  </div>
`

const image = ({ css, narrative }) =>
  narrative.image &&
  html`
  <img src=${narrative.image} />
`

const text = ({ css, narrative }) => html`
  <p class=${css.text}>${narrative.text}</p>
`

const choice = ({ css, narrative }) => html`
  <div class=${css.choice}>
    <button class=${css.choiceButton}>
      ${narrative.choiceText}
    </button>
  </div>
`

const choices = props =>
  html`
  <div class=${props.css.choices}>
    ${narratives
      .getChoices(props.narrative)
      .map(n => choice({ ...props, narrative: n }))}
  </div>
`

const index = style(css)(
  props => html`
  ${title()}
  <div class=${css.content}>
    ${image(props)}
    ${text(props)}
    ${prompt(props)}
    ${choices(props)}
  </div>
`
)

export default (ctx: RouteContext) => {
  const narrative = narratives.find(ctx.params.id)
  if (narrative) render(index({ narrative }), document.getElementById('app'))
  else page.redirect('/error/404')
}
