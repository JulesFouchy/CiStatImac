export default (state) => {
    state.overTimeChart.data.labels = ['Septembre', 'Octobre', 'Novembre', 'Décembre', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août'],
    //state.overTimeChart.data.datasets = state.monthsDatasets.map( dataset => ({...dataset, maxBarThickness: 10}))
    state.overTimeChart.data.datasets = [
        {
            label: 'imac 2021',
            maxBarThickness: 10,
            data: [10, 20, 10, 20, 50, 45, 10, 20, 10, 20, 50, 45]
        },
        {
            label: 'imac 2022',
            maxBarThickness: 10,
            data: [100, 20, 10, 20, 50, 45, 10, 20, 10, 20, 50, 45]
        }
    ]
    state.overTimeChart.update({duration: 800})
} 