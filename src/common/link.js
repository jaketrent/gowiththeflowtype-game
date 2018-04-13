// @flow

import type { Props } from './types'

import { html } from 'lit-html'

type LinkProps = {
  className?: string,
  label: string,
  href: string
} & Props

export default (props: LinkProps): TemplateResult =>
  html`<a class="${props.className}" href="${props.href}">${props.label}</a>`
