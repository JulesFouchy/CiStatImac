import { h } from 'hyperapp'
import Section from '../components/Section'
import PieChart from '../components/PieChart'
import getTagCitationAssociations from '../api/getTagCitationAssociations'

const computeTopTags = (state, tagCitationAssociations) => {
    const tagsCount = tagCitationAssociations.reduce((acc, el) => {
        acc[el["idTag"]] = (acc[el["idTag"]] || 0) + 1;
        return acc;
    }, {})
    return Object.entries(tagsCount).map( pair => {
        const id = pair[0]; const count = pair[1]
        const tagObj = state.dbTags.find( tag => tag['id'] === id)
        return {
            ...tagObj,
            count: count
        }
    })
}

export default (state) => {
    return (
        Section({
            id: 'topTags',
            title: 'Podium des Tags',
            children: [
                PieChart({
                    acquireData: async (chart) => {
                        const data = await getTagCitationAssociations()
                        const topTags = computeTopTags(state, data)
                        //
                        chart.data.labels = topTags.map( el => el.name)
                        chart.data.datasets[0].data = topTags.map( el => el.count)
                        chart.data.datasets[0].backgroundColor = topTags.map( el => el.color)
                        //
                        chart.update({duration: 800})
                    }
                })
            ]
        })
    )
}
