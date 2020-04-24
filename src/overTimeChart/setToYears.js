export default (state) => {
    state.overTimeChart.data.labels = state.yearsList
    if (state.yearsDatasets)
        state.overTimeChart.data.datasets = state.yearsDatasets.map( dataset => ({...dataset, maxBarThickness: 10}))
    state.overTimeChart.update({duration: 800})
}
