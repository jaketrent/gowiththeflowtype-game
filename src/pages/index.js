// @flow

import type { Narrative } from '../narratives/types'
import type { Props, RouteContext, Router } from '../common/types'

import { html, render } from 'lit-html'

import link from '../common/link'
import { NarrativeStore } from '../narratives/store'

type IndexProps = {
  narrative: Narrative,
  store: NarrativeStore
} & Props

export const prompt = ({ narrative }: IndexProps): ?TemplateResult =>
  narrative.prompt
    ? html`
      <div class="index__prompt">
        ${narrative.prompt}
      </div>
`
    : null

export const text = ({ narrative }: IndexProps) => html`
  <p class="index__text">${narrative.text}</p>
`

export const choice = ({ narrative }: IndexProps): ?TemplateResult =>
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
    ${props.store
      .getChoices(props.narrative)
      .map(n => choice({ ...props, narrative: n }))}
  </div>
`

export const title = (props: IndexProps) => {
  const lastNarratives = props.store.filterWithChoice(props.narrative.id)
  return html`
  <h4 class="title">
    <a href="/" class="title__link">
      Go With the Flow
    </a>
    ${
      lastNarratives[0]
        ? html`<a class="title__rewind" href="/${
            lastNarratives[0].id
          }"><<</button>`
        : null
    }
  </h4>
`
}

const index = (props: IndexProps): TemplateResult => html`
  <div class="index">
    ${title(props)}
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
  const narrative = ctx.store && ctx.store.find(ctx.params.id)
  if (narrative)
    render(
      index({ narrative, store: ctx.store || new NarrativeStore() }),
      document.getElementById('app')
    )
  else router.redirect('/error/404')
}
