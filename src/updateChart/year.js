export default (state) => {
    console.log('state')
    console.log(state)
    state.overTimeChart.data.labels = state.yearsList,
    state.overTimeChart.data.datasets = state.yearDatasets.map( dataset => ({...dataset, maxBarThickness: 10}))
    //state.overTimeChart.options.height = 1500
    state.overTimeChart.update({duration: 800})
} 