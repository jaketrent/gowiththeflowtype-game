// @flow

import { html, render } from 'lit-html'

import type { Narrative } from '../narratives/types'
import type { Props, RouteContext, Router } from '../common/types'

import * as narratives from '../narratives'
import { link, title } from '../common'

type IndexProps = {
  narrative: Narrative
} & Props

const prompt = ({ narrative }: IndexProps): ?TemplateResult =>
  narrative.prompt
    ? html`
  <div class="index__prompt">
    ${narrative.prompt}
  </div>
`
    : null

const text = ({ narrative }: IndexProps) => html`
  <p class="index__text">${narrative.text}</p>
`

const choice = ({ narrative }: IndexProps): ?TemplateResult =>
  narrative.choiceText
    ? html`
 <div class="index__choice">
    ${link({
      className: 'index__choice-button',
      href: '/' + narrative.id,
      label: narrative.choiceText
    })}
  </div>
`
    : null

const choices = (props: IndexProps): TemplateResult =>
  html`
  <div>
    ${narratives
      .getChoices(props.narrative)
      .map(n => choice({ ...props, narrative: n }))}
  </div>
`

const index = (props: IndexProps): TemplateResult => html`
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
