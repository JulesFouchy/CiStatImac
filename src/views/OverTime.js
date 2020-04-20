import { h } from 'hyperapp'
import Section from '../components/Section'
import BarChart from '../components/BarChart'
import FormTime from '../components/FormTime'


export default (state, actions) => {
    return (
        Section({
            id: 'overTime',
            title: 'Les citations à travers le temps',
            children: [
                h('div', { class: 'formForChart' }, FormTime
                ),
                h('div', { class: 'myBarChart' }, 
                    BarChart({
                        labels: ['2018','2019','2020','2021','2022'],
                        datasets: 
                            [
                                // {
                                //     label: 'IMAC 2022',
                                //     data: [67.8, 50, 3], // Année+Mois OU Annee
                                //     backgroundColor: '#874EDD',
                                //     maxBarThickness: 10,
                                    
                                // },   
                            ],   
                            height : 280,   
                    }),     
                ),
            ],
        })   
    )
}


