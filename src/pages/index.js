// @flow

import { html, render } from 'lit-html'

import type { Narrative } from '../narratives/types'
import type { Props, RouteContext, Router } from '../common/types'

import * as narratives from '../narratives'
import { link, title } from '../common'

type IndexProps = {
  narrative: Narrative
} & Props

const prompt = ({ narrative }: IndexProps) =>
  narrative.prompt &&
  html`
  <div class="index__prompt">
    ${narrative.prompt}
  </div>
`

const text = ({ narrative }: IndexProps) => html`
  <p class="index__text">${narrative.text}</p>
`

const choice = ({ narrative }: IndexProps) =>
  narrative.choiceText &&
  html`
 <div class="index__choice">
    ${link({
      className: 'index__choice-button',
      href: '/' + narrative.id,
      label: narrative.choiceText
    })}
  </div>
`

const choices = (props: IndexProps) =>
  html`
  <div>
    ${narratives
      .getChoices(props.narrative)
      .map(n => choice({ ...props, narrative: n }))}
  </div>
`

const index = (props: IndexProps) => html`
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
