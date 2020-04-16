import { h } from 'hyperapp'

// basic componant with props
export default (props) =>
    h('div', {}, [
        h('button', { onclick: props.onBackward }, '<'),
        h('button', { onclick: props.onForward  }, '>')
    ])