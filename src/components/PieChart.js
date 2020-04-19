import { h } from 'hyperapp'
import Chart from 'chart.js'

export default (props) =>
    h('div', {}, [
        h('canvas', {
            oncreate: (element) => {
                const ctx = element.getContext('2d')
                const chart = new Chart(ctx, {
                    type: 'doughnut',
                    responsive: true,
                    data: {
                        datasets: [{}]
                    }
                })
                props.acquireData(chart)
            }
        })
    ])