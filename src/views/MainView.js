import { h } from 'hyperapp'
import TopCitations from './TopCitations'

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
        ]
    )
