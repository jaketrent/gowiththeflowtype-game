// @flow

import { html, render } from 'lit-html'

import * as narratives from './narratives'

const prompt = ({ css, narrative }) =>
  narrative.prompt &&
  html`
  <h2>
    ${narrative.prompt}
  </h2>
`
const image = ({ css, narrative }) =>
  narrative.image && html` <img src=${narrative.image} /> `

const text = ({ css, narrative }) => html` <p>${narrative.text}</p>`

const choice = ({ css, narrative }) => html`
  <div>
    <button>
      ${narrative.choiceText}
    </button>
  </div>
`

const choices = ({ narrative }) =>
  html`
  <div>
    ${narratives.getChoices(narrative).map(n => choice({ narrative: n }))}
  </div>
`

const index = ({ narrative }) => html`
  <h4>Go with the Flow</h4>
  ${image({ narrative })}
  ${text({ narrative })}
  ${prompt({ narrative })}
  ${choices({ narrative })}
`

const firstNarrative = narratives.find(1)
if (firstNarrative)
  render(index({ narrative: firstNarrative }), document.getElementById('app'))
else console.log('error: cant find first narrative')
