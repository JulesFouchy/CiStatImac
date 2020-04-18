import { h } from 'hyperapp'
import Box from './Box'
import Ranking from './RankingNumber'

const customScrolling = event => {
    event.preventDefault()
    event.target.scrollBy({
        top: event.deltaY * 0.2,
        left: 0
    })
}

// basic componant with props
export default (props) =>
    h('div', {class: 'citationContainer'}, [
        Ranking({number: props.ranking}),
        Box({ content: [
            h('div', {class: 'nbLikes'}, props.nbLikes),
            h('div', {}, 'Likes')
        ]}),
        h('span', {class: 'citationTextAndAuthor'}, [
            h('p', {class: 'citationText', onwheel: customScrolling}, '"' + props.text + '"'),
            h('span', {class: 'citationAuthor'}, 'par ' + props.author)
        ])
    ])
