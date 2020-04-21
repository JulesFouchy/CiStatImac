import { h } from 'hyperapp'
// import Plotly from 'plotly.js-dist'
import Chart from 'chart.js'

// basic componant with props
export default (props) =>
    h('div', {}, [
        h('canvas', {
            oncreate: (element) => {
                const ctx = element.getContext('2d')
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
                                boxWidth: 6,
                            },
                        },
                        tooltips: { // Thanks to https://stackoverflow.com/questions/37257034/chart-js-2-0-doughnut-tooltip-percentages/49717859#49717859
                            callbacks: {
                                label: (tooltipItem, data) =>  {
                                    const dataset = data.datasets[tooltipItem.datasetIndex]
                                    const currentValue = dataset.data[tooltipItem.index]
                                    const meta = dataset._meta[Object.keys(dataset._meta)[0]]
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
                c.canvas.style.height = props.height + 'px',
                c.canvas.style.width = props.width + 'px'
                // si une fonction de callback est passé en paramètres de mes props alors je l'exécute
                if (props.callBack !== undefined) { props.callBack(c) }
            },
            style: 'background-color: #fff;'
        })
    ])