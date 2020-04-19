import { h } from 'hyperapp'

// basic componant with props
export default (props) =>
    h('buttonTime', { onclick: props.onClick }, props.text)