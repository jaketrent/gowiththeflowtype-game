// @flow

import { html } from 'lit-html'

import css from './title.css'
import * as narratives from '../narratives'
import style from './style'

export default style(css)(({ css, narrative }) => {
  const lastNarratives = narratives.filterWithChoice(narrative.id)
  return html`
  <h4 class="${css.title}">
    <a href="/">
      <img src="/static/img/title.png" alt="Go with the Flow" />
    </a>
    ${
      lastNarratives[0]
        ? html`<a class="${css.rewind}" href="/${
            lastNarratives[0].id
          }"><<</button>`
        : null
    }
  </h4>
`
})
