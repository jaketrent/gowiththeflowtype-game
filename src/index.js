// @flow

import { html, render } from 'lit-html'

const index = ({ name }) => html`Hi, ${name}`

render(index({ name: 'Jake' }), document.getElementById('app'))
