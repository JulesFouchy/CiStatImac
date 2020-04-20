import { h } from 'hyperapp'
import TopCitations from './TopCitations'
import TopConneries from './TopConneries'
import TopTags from './TopTags'
import OverTime from './OverTime'
import Intro from './Intro'
import getCitationsPerYear from '../api/getCitationsPerYear'

export default (state, actions) =>
    h('div',
        {
            id: 'mainView',
            oncreate: () => {
                actions.loadDatabase()
                getCitationsPerYear().then( response => actions.setCitationsPerYear(response) )
            }
        },
        // ------------- SECTIONS --------------
        [
            h('div',
                { 
                    id: 'allSections'
                },
                [
                h('div',
                {
                    id : 'sectionsLeft'
                },
                [
                Intro(state, actions),
                TopCitations(state, actions),
                ]),
                h('div',
                    {
                        id : 'sectionsRight'
                    },
                    [
                        OverTime(state, actions),
                        h('div',
                        {
                            id : 'sectionsBottomRight'
                        },
                        [
                        TopTags(state, actions),
                        TopConneries(state, actions)
                    ])
                ]),
            ]),
        ]
    )
