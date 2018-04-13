// @flow

import type { Props } from './types'

import { html } from 'lit-html'

export default (props: Props) =>
  html`<a class="${props.className}" href="${props.href}">${props.label}</a>`
