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
                h('div', { class: 'formForChart' }, FormTime),
                h('div', { class: 'myBarChart' }, 
                    BarChart({
                        callback: (chart) => {
                            actions.setOverTimeChart(chart)
                        }
                    })
                ),
            ],
        })   
    )
}


