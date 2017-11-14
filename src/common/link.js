import { html } from 'lit-html'

export default props =>
  html`<a href=${props.href} class=${props.css.link}>${props.label}</a>`
