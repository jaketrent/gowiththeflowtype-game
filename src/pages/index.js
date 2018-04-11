// @flow

import { html, render } from 'lit-html'

import type { RouteContext, Router } from '../common/types'

import css from './index.css'
import * as narratives from '../narratives'
import { link, style, title } from '../common'

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
    ${link({
      css: { link: css.choiceButton },
      href: '/' + narrative.id,
      label: narrative.choiceText
    })}
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
  <div class="${css.index}">
    ${title({ narrative: props.narrative })}
    <div class="${css.content}">
      <div>
        ${image(props)}
        ${text(props)}
      </div>
      <div>
        ${prompt(props)}
        ${choices(props)}
      </div>
    </div>
  </div>
`
)

export default (router: Router, ctx: RouteContext) => {
  const narrative = narratives.find(ctx.params.id)
  if (narrative) render(index({ narrative }), document.getElementById('app'))
  else router.redirect('/error/404')
}
