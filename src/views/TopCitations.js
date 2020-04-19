import { h } from 'hyperapp'
import Section from '../components/Section'
import Citation from '../components/Citation'
import PageNavigation from '../components/PageNavigation'

export default (state, actions) => {
    const maxNbPages = Math.ceil(state.dbCitations.length / state.topCitations_NbCitatsPerPage)
    return (
        Section({
            id: 'topCitations',
            title: 'Top des Citations',
            children: [
                h('div', {class: 'citationsList'},
                    state.topCitations.map( citation => Citation(citation) )
                ),
                PageNavigation({
                    navContent: state.topCitations_NavContent,
                    currPage: state.topCitations_CurrentPage,
                    maxNbPages: maxNbPages,
                    onBackward:  () => { actions.topCitationsNavToPage(state.topCitations_CurrentPage - 1) ; actions.computeTopCitations() },
                    onForward:   () => { actions.topCitationsNavToPage(state.topCitations_CurrentPage + 1) ; actions.computeTopCitations() },
                    onInputText: (event) => {
                        if (event.target.value === '')
                            actions.setNavContentToEmpty()
                        else {
                            const p = event.target.value === ' ' ? NaN : Number(event.target.value)
                            console.log(p)
                            console.log(Number.isInteger(p))
                            if (Number.isInteger(p)) {
                                actions.topCitationsNavToPage( Math.min(Math.max(p, 1), maxNbPages) - 1 )
                                actions.computeTopCitations()
                            } else {
                                if (state.topCitations_NavContent === ' ')
                                    console.log('stfu')
                                if (state.topCitations_NavContent !== '')
                                    actions.topCitationsNavToPage( state.topCitations_CurrentPage )
                                else {
                                    actions.setNavContentToEmpty()
                                }
                            }
                        }
                    }
                })
            ]
        })
    )
}
