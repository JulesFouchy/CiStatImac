import { h } from 'hyperapp'

// basic componant with props
export default (props) =>
    h('div', {class: 'pageNavigation'}, [
        h('button', { onclick: props.onBackward }, '<'),
        h('button', { onclick: props.onForward  }, '>')
    ])