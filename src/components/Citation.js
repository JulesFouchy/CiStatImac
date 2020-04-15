import { h } from 'hyperapp'

// basic componant with props
export default (props) =>
    h('div', {}, props.text)
