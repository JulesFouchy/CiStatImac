import { h } from 'hyperapp'

// basic componant with props
export default (props) => {
    const leftEnabled  = props.currPage > 0
    const rightEnabled = props.currPage < props.maxNbPages - 1
    return (
        h('div', {class: 'pageNavigation'}, [
            h('div', {class: 'pageNavInput'}, [
                h('span', {}, 'Page '),
                h('input', {value: props.navContent, placeholder: props.currPage + 1, oninput: props.onInputText}),
                h('span', {}, ' sur ' + props.maxNbPages)
            ]),
            h('div', {class: 'pageNavButtons'}, [
                h('button', { disabled: !leftEnabled,  onclick: () => props.onBackward() }, h('i', {class: 'fas fa-angle-left'})),
                h('button', { disabled: !rightEnabled, onclick: () => props.onForward()  }, h('i', {class: 'fas fa-angle-right'}))
            ])
        ]))
}
