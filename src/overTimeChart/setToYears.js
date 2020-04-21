export default (state) => {
    state.overTimeChart.data.labels = state.yearsList,
    state.overTimeChart.data.datasets = state.yearsDatasets.map( dataset => ({...dataset, maxBarThickness: 10}))
    //state.overTimeChart.options.height = 1500
    state.overTimeChart.update({duration: 800})
} 