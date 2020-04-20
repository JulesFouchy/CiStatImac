import { h } from 'hyperapp'
import Section from '../components/Section'

export default (state) => {
    return (
        Section({
            id: 'intro',
            title: 'CitatiStats',
            children: [
                h('p', {class: 'introText'}),
                h('button') //do onclick
            ]
        })
    )
}
