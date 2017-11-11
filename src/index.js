// @flow

import { html, render } from 'lit-html'

import * as narratives from './narratives'

const choice = ({ css, narrative }) => html`
  <button>
    ${narrative.choiceText}
  </button>
`

const choices = ({ narrative }) =>
  html`
  <div>
    ${narratives.getChoices(narrative).map(n => choice({ narrative: n }))}
  </div>
`

const index = ({ narrative }) => html`
  <h4>Go with the Flow</h4>
  ${choices({ narrative })}
`

const firstNarrative = narratives.find(1)
if (firstNarrative)
  render(index({ narrative: firstNarrative }), document.getElementById('app'))
else console.log('error: cant find first narrative')
