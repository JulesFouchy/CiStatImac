import { h } from 'hyperapp'
import Section from '../components/Section'
import Citation from '../components/Citation'
import PageNavigation from '../components/PageNavigation'

export default (state, actions) =>
    Section({
        id: 'topCitations',
        title: 'Top des Citations',
        children: [
            h('div', {class: 'citationsList'},
                state.topCitations.map( citation => Citation(citation) )
            ),
            PageNavigation({
                onBackward: () => { actions.topCitationsNavPage(-1) ; actions.getTopCitations() },
                onForward:  () => { actions.topCitationsNavPage(+1) ; actions.getTopCitations() }
            })
        ]
    })
