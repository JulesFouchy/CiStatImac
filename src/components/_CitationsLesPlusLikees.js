// import { h } from 'hyperapp'
import Section from './Section'
import Citation from './Citation'
import PageNavigation from './PageNavigation'

export default (props) =>
    Section({
        id: 'citationsLesPlusLikees',
        title: 'Citations les plus likées',
        children: [
            ...props.citations.map( citation => Citation(citation) ),
            PageNavigation({
                onBackward: () => { props.actions.topCitationsNavPage(-1) ; props.actions.getCitationsLesPlusLikees() },
                onForward:  () => { props.actions.topCitationsNavPage(+1) ; props.actions.getCitationsLesPlusLikees() }
            })
        ]
    })
