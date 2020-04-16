import { h } from 'hyperapp'

// basic componant with props
export default (props) =>
    h('div', {class: 'pageNavigation'}, [
        h('span', {}, 'Page '),
        h('input', {value: props.currPage, placeholder: props.currPage}),
        h('span', {}, ' sur ' + props.maxNbPages),
        h('button', { onclick: () => { if (props.currPage > 1)                props.onBackward() } }, '<'),
        h('button', { onclick: () => { if (props.currPage < props.maxNbPages) props.onForward() } }, '>')
    ])