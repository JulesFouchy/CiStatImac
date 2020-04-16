import { h } from 'hyperapp'

// basic componant with props
export default (props) => {
    const leftEnabled  = props.currPage > 1
    const rightEnabled = props.currPage < props.maxNbPages
    return (
        h('div', {class: 'pageNavigation'}, [
            h('span', {}, 'Page '),
            h('input', {value: props.currPage, placeholder: props.currPage}),
            h('span', {}, ' sur ' + props.maxNbPages),
            h('button', { disabled: !leftEnabled,  onclick: () => { if (leftEnabled)  props.onBackward() } }, '<'),
            h('button', { disabled: !rightEnabled, onclick: () => { if (rightEnabled) props.onForward() } }, '>')
        ]))
    }