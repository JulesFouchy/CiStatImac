import { h } from 'hyperapp'

// basic componant with props
export default (props) =>
    h('span', { class: 'RankingNumber' + (props.number===1 ? ' HighlightedRankingNumber' : '') }, props.number)
