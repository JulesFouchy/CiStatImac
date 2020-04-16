import { h } from 'hyperapp'
import Box from './Box'

// basic componant with props
export default (props) =>
    h('div', {class: 'citationContainer'}, [
        Box({ content: props.nbLikes + ' Likes' }),
        h('p', {class: 'citationText'}, props.text),
        h('span', {class: 'citationAuthor'}, 'par ' + props.author)
    ])
