//import { h } from 'hyperapp'
import Section from '../components/Section'
import PieChart from '../components/PieChart'
import getTagCitationAssociations from '../api/getTagCitationAssociations'

const computeTopTags = (state, tagCitationAssociations) => {
    const tagsCount = tagCitationAssociations.reduce((acc, el) => {
        acc[el['idTag']] = (acc[el['idTag']] || 0) + 1
        return acc
    }, {})
    const asArray =
        Object.entries(tagsCount).map( pair => {
            const id = pair[0]; const count = pair[1]
            const tagObj = state.dbTags.find( tag => tag['id'] === id)
            return {
                ...tagObj,
                count: count
            }
        })
    const sorted = asArray.sort( (a, b) => b['count'] - a['count'] )
    return sorted
}

export default (state) => {
    return (
        Section({
            id: 'topTags',
            title: 'Podium des Tags',
            children: [
                PieChart({
                    //size: '325px',
                    acquireData: async (chart) => {
                        const data = await getTagCitationAssociations()
                        const topTags = computeTopTags(state, data)
                        //
                        chart.data.labels = topTags.map( el => el.name)
                        chart.data.datasets[0].data = topTags.map( el => el.count)
                        chart.data.datasets[0].borderWidth = new Array(12).fill(2)
                        chart.data.datasets[0].backgroundColor = [
                            '#874EDD',
                            '#4EDD98',
                            '#F45B80',
                            '#FDC132',
                            '#5CDCEE',
                            '#4670DD',
                            '#F9822C',
                            '#B90000',
                            '#35ADC8',
                            '#36316F',
                            '#C535C8',
                            '#439E2D',
                        ]
                        //
                        chart.update({duration: 800})
                    }
                })
            ]
        })
    )
}
