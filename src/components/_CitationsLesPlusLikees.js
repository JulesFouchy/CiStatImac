// import { h } from 'hyperapp'
import Section from './Section'
import Citation from './Citation'

export default (props) =>
    Section({
        title: 'Citations les plus likées',
        children: props.citations.map( citation =>
            Citation(citation)
        )
    })
