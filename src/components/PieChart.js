import { h } from 'hyperapp'
import Chart from 'chart.js'

export default (props) =>
    h('div', {}, [
        h('canvas', {
            id : 'myPieChart',
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
                                top: 5,
                                right: 5,
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
                        },
                        tooltips: { // Thanks to https://stackoverflow.com/questions/37257034/chart-js-2-0-doughnut-tooltip-percentages/49717859#49717859
                            callbacks: {
                                label: (tooltipItem, data) =>  {
                                    const dataset = data.datasets[tooltipItem.datasetIndex]
                                    const meta = dataset._meta[Object.keys(dataset._meta)[0]]
                                    const total = meta.total
                                    const currentValue = dataset.data[tooltipItem.index]
                                    const percentage = parseFloat((currentValue / total * 100).toFixed(1))
                                    return ' ' + currentValue + ' (' + percentage + '%)'
                                },
                                title: (tooltipItem, data) => {
                                    return data.labels[tooltipItem[0].index]
                                }
                            }
                        },
                    },
                })
                props.acquireData(chart)
            },
            style: 'height : 100%;'
        })
    ])
