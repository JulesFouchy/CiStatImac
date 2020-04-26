import { h } from 'hyperapp'
import Chart from 'chart.js'

export default (props) =>
    h('div', {}, [
        h('canvas', {
            oncreate: (element) => {
                const ctx = element.getContext('2d')
                Chart.defaults.global.defaultFontSize = 10
                const c = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: [],
                        datasets: [{}],
                    },
                    options: {
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                stacked: true,
                                gridLines: {
                                    display: false,
                                }
                            }],
                            yAxes: [{
                                stacked: true,
                            }]
                        },
                        legend: {
                            position: 'right',
                            labels: {
                                usePointStyle: true,
                                boxWidth: 4,
                            },
                        },
                        tooltips: { // Thanks to https://stackoverflow.com/questions/37257034/chart-js-2-0-doughnut-tooltip-percentages/49717859#49717859
                            callbacks: {
                                label: (tooltipItem, data) =>  {
                                    const dataset = data.datasets[tooltipItem.datasetIndex]
                                    const currentValue = dataset.data[tooltipItem.index]
                                    const total = data.datasets.reduce( (acc, el) => {
                                        return acc + el.data[tooltipItem.index]
                                    }, 0)
                                    return ' ' + currentValue + ' sur ' + total
                                },
                                title: (tooltipItem, data) => {
                                    const dataset = data.datasets[tooltipItem[0].datasetIndex]
                                    return dataset.label
                                }
                            }
                        },
                    },
                    responsive: true,
                })
                if (props.callback !== undefined) { props.callback(c) }
            },
            height: 200,
            //style: 'background-color: #fff; width : 39%; margin-top : 2%;'
        })
    ])
