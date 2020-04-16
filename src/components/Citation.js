import { h } from 'hyperapp'
import Box from './Box'
import Ranking from './RankingNumber'

// basic componant with props
export default (props) =>
    h('div', {class: 'citationContainer'}, [
        Ranking({number: props.ranking}),
        Box({ content: props.nbLikes + ' Likes' }),
        h('span', {class: 'citationTextAndAuthor'}, [
            h('p', {class: 'citationText'}, '"' + props.text + '"'),
            h('span', {class: 'citationAuthor'}, 'par ' + props.author)
        ])
    ])
