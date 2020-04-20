import { h } from 'hyperapp'
import TopCitations from './TopCitations'
import TopConneries from './TopConneries'
import TopTags from './TopTags'
import OverTime from './OverTime'
import Intro from './Intro'
import Chart from 'chart.js'

export default (state, actions) =>
    h('div',
        {
            id: 'mainView',
            oncreate: () => {
                actions.loadDatabase()
                Chart.defaults.global.defaultFontFamily = 'Roboto'
            }
        },
        // ------------- SECTIONS --------------
        [
            Intro(state, actions),
            TopCitations(state, actions),
            TopTags(state, actions),
            TopConneries(state, actions),
            OverTime(state, actions)
        ]
    )
