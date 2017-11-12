import { html } from 'lit-html'

import css from './title.css'
import style from './style'

export default style(css)(
  props => html`
  <h4 class=${props.css.title}>Flow</h4>
`
)
