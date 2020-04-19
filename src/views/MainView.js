import { h } from 'hyperapp'
import TopCitations from './TopCitations'
import TopConneries from './TopConneries'
import TopTags from './TopTags'

export default (state, actions) =>
    h('div',
        {
            oncreate: () => {
                actions.loadDatabase()
            }
        },
        // ------------- SECTIONS --------------
        [
            TopCitations(state, actions),
            TopTags(state, actions)
            TopConneries(state, actions),
        ]
    )
