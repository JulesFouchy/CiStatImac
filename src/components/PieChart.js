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
                    },
                    options: {
                        cutoutPercentage: 55
                    }
                })
                chart.canvas.style.height = props.size
                chart.canvas.style.width = props.size
                props.acquireData(chart)
            }
        })
    ])