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
                        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                        datasets:
                            [
                                {
                                    label: 'IMAC 2022',
                                    data: [67.8, 50, 3], // Année+Mois OU Annee
                                    backgroundColor: '#874EDD',
                                    maxBarThickness: 10,
                                    
                                },
                                {
                                    label: 'IMAC 2021',
                                    data: [20.7,12,3],
                                    backgroundColor: '#4EDD98',
                                    maxBarThickness: 10,
                                },
                                {
                                    label: 'IMAC 2020',
                                    data: [11.4, 12.3, 8.9],
                                    backgroundColor: '#F45B80',
                                    maxBarThickness: 10,
                                },
                                 {
                                    label: 'IMAC 2019',
                                    data: [11.4, 12.3, 8.9],
                                     backgroundColor: '#5CDCEE',
                                     maxBarThickness: 10,
                                     hidden: true,

                                },
                                {
                                    label: 'IMAC 2018',
                                    data: [11.4, 12.3, 8.9],
                                    backgroundColor: '#4670DD',
                                    maxBarThickness: 10,
                                    hidden: true,

                                },
                                {
                                    label: 'IMAC 100 AV. BIRI',
                                    data: [11.4, 12.3, 8.9],
                                    backgroundColor: '#F9822C',
                                    maxBarThickness: 10,
                                    hidden: true,
                                },
                                {
                                    label: 'PROF',
                                    data: [11.4, 12.3, 8.9],
                                    backgroundColor: '#FDC132',
                                    maxBarThickness: 10,
                                },
                                {
                                    label: 'ADMINISTRATION',
                                    data: [11.4, 12.3, 8.9],
                                    backgroundColor: '#439E2D',
                                    maxBarThickness: 10,
                                    hidden: true,

                                },
                                {
                                    label: 'AUTRE',
                                    data: [11.4, 12.3, 8.9],
                                    backgroundColor: '#B90000',
                                    maxBarThickness: 10,
                                    hidden: true,
                                },
                               
                            ],   
                            height : 280,   
                    }),     
                ),
            ],
        })   
    )
}


