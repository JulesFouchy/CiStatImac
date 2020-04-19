import { h } from 'hyperapp'
import Chart from 'chart.js'

export default (props) =>
    h('div', {}, [
        h('canvas', {
            oncreate: (element) => {
                const ctx = element.getContext('2d')
                const c = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: props.labels,
                        datasets: [{
                            data: props.data,
                            backgroundColor: props.colors 
                        }]
                    },
                    responsive: true
                })
            }
        })
    ])