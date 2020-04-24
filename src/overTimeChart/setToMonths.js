export default (state) => {
    state.overTimeChart.data.labels = ['Septembre', 'Octobre', 'Novembre', 'Décembre', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août']
    if (state.monthsDatasets !== undefined)
        state.overTimeChart.data.datasets = state.monthsDatasets.map( dataset => ({...dataset, maxBarThickness: 10}))
    state.overTimeChart.update({duration: 800})
}
