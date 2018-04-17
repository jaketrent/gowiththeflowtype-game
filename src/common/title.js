// @flow

import type { NarrativeId } from '../narratives/types'
import type { Props } from './types'

import { html } from 'lit-html'

import { NarrativeStore } from '../narratives/store'

type TitleProps = {
  id: NarrativeId,
  store: NarrativeStore
} & Props

export default (props: TitleProps) => {
  const lastNarratives = props.store.filterWithChoice(props.id)
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
