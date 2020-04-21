import { h } from 'hyperapp'

export default (state, actions, props) =>
    h('div', {class: 'formTime'}, [
        h('button', {disabled : state.bShowYears, onclick: actions.switchOverTimeChart},
            'Par année'
        ),
        h('button', {disabled : !state.bShowYears, onclick: actions.switchOverTimeChart},
            'Par mois'
        ),
        h('select',
            {
                hidden : state.bShowYears,
                id: 'monthSelector',
            },
            schoolYearsOptionsList()
        )
     //Bouton byMonth
     // Slider pour les mois / années
    ])

const getSchoolYear = (date) => {
    const year = date.getFullYear()
    if (date.getMonth() < 9) // before september
        return year - 1
    else
        return year
}

const schoolYearsOptionsList = () => {
    const currYear = getSchoolYear(new Date())
    const nbYears = currYear - 2018 + 1
    const list = new Array(nbYears).fill('').map( (el, index) => {
        const year = currYear - index
        const str = year + '-' + (year + 1)
        return h('option', {
            value: str,
            label: str
        })
    })
    return list
}