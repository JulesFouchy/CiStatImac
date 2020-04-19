import { h } from 'hyperapp'
import Section from '../components/Section'
import Connerie from '../components/Connerie'

export default (state) => {
    return (
        Section({
            id: 'topConneries',
            title: 'Qui dit le plus de conneries ?',
            children: [
                h('div', {class: 'conneriesAuthorList'},
                    state.topConneries.map( (connerie, index) => Connerie({...connerie, ranking: index + 1}) )
                ),
            ]
        })
    )
}
