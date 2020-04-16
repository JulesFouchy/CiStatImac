import { h } from 'hyperapp'

export default (props) =>
    h('div', {class: 'section', id: props.id}, [
        h('h1', {class: 'sectionTitle'}, props.title),
        ...props.children
    ])
