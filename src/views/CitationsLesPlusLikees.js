import Section from '../components/Section'
import Citation from '../components/Citation'
import PageNavigation from '../components/PageNavigation'

export default (state, actions) =>
    Section({
        id: 'citationsLesPlusLikees',
        title: 'Citations les plus likées',
        children: [
            state.citationsLesPlusLikees.map( citation => Citation(citation) ),
            PageNavigation({
                onBackward: () => { actions.topCitationsNavPage(-1) ; actions.getCitationsLesPlusLikees() },
                onForward:  () => { actions.topCitationsNavPage(+1) ; actions.getCitationsLesPlusLikees() }
            })
        ]
    })
