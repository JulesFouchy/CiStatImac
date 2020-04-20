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
                        cutoutPercentage: 55,
                        layout: {
                            padding: {
                                top: 20,
                                right: 15,
                                left: 0,
                                bottom: 0
                            }
                        },
                        legend: {
                            position: 'right',
                            labels: {
                                usePointStyle: true,
                                boxWidth: 6
                            }
                        }
                    }
                })
                props.acquireData(chart)
            }
        })
    ])