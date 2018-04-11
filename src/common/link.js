// @flow

import type { Props } from './types'

import { html } from 'lit-html'

export default (props: Props) =>
  html`<a href="${props.href}" class="${props.css.link}">${props.label}</a>`
