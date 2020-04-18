import { h } from 'hyperapp'

// basic componant with props
export default (props) =>
    h('span', { class: 'rankingNumber' + (props.number === 1 ? ' highlightedRankingNumber' : '') }, props.number)
