import { h } from 'hyperapp'
import TopCitations from './TopCitations'
import TopConneries from './TopConneries'

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
            TopConneries(state, actions),
        ]
    )
