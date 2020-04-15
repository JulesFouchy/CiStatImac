import { h } from 'hyperapp'

// basic componant with props
export default (props) =>
    h('div', {class: 'citationContainer'}, [
        h('div', {class: 'square'}, props.nbLikes + ' Likes'),
        h('p', {class: 'citationText'}, props.text),
        h('span', {class: 'citationAuthor'}, props.author)
    ])
