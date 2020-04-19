import { h } from 'hyperapp'
import Section from '../components/Section'
import PieChart from '../components/PieChart'

export default (state, actions) => {
    return (
        Section({
            id: 'topTags',
            title: 'Podium des Tags',
            children: [
                PieChart({
                    data: [50, 60, 20],
                    labels: ['Race', 'Titre', 'Schlag'],
                    colors: ['Green', 'Blue', 'Red']
                })
            ]
        })
    )
}
