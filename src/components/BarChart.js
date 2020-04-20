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
                        datasets: [],
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
                            position: 'top',
                            labels: {
                                usePointStyle: true,
                                boxWidth: 10,
                            },
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