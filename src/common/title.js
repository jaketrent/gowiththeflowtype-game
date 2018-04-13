// @flow

import type { Props } from './types'

import { html } from 'lit-html'

import * as narratives from '../narratives'

export default (props: Props) => {
  const lastNarratives = narratives.filterWithChoice(props.narrative.id)
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
