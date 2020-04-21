export default (state) => {
    console.log('state')
    console.log(state)
    state.yearChart.data.labels = state.yearsList,
    state.yearChart.data.datasets = state.yearDatasets.map( dataset => ({...dataset, maxBarThickness: 10}))
    //state.yearChart.options.height = 1500
    state.yearChart.update({duration: 800})
} 