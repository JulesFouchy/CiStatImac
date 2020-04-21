export default (state) => {
    console.log('state')
    console.log(state)
    var thickness = 'maxBarThickness: 10;';
    state.yearChart.data.labels = state.yearsList,
    state.yearChart.data.datasets[0].data = state.yearDataset
    state.yearChart.update({duration: 800})
    console.log(state.yearChart)
    //.map(el => el.thickness)
    // height : 200 px ??
} 