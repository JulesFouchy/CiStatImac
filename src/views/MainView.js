import { h } from 'hyperapp'
import TopCitations from './TopCitations'
import TopConneries from './TopConneries'
import TopTags from './TopTags'
import OverTime from './OverTime'

export default (state, actions) =>
    h('div',
        {
            id: 'mainView',
            oncreate: () => {
                actions.loadDatabase()
            }
        },
        // ------------- SECTIONS --------------
        [
            TopCitations(state, actions),
            TopTags(state, actions),
            TopConneries(state, actions),
            OverTime(state,actions)
        ]
    )
