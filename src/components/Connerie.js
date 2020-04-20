import { h } from 'hyperapp'
import Box from './Box'
import Ranking from './RankingNumber'

// basic componant with props
export default (props) =>
    h('div', {class: 'conneriesContainer'}, [
        Ranking({number: props.ranking}),
        h('p', {class: 'authorType'}, 'Les ' + props.authorType),
        Box({ content: [
            h('div', {class: 'nbCitationsAuthorType'}, props.nbCitationsAuthorType + (props.nbCitationsAuthorType === 1 ? ' citation' : ' citations'))
        ]})
    ])
