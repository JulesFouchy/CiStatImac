import { h } from 'hyperapp'

// basic componant with props
export default (props) =>
    h('button', {class: props.class, onclick: props.onClick }, props.text)