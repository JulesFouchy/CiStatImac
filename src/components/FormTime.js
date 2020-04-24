import { h } from 'hyperapp'
import DropdownList from '../components/DropdownList'

export default (state, actions) =>
    h('div', {class: 'formTime'}, [
        DropdownList({
            hidden : state.bShowYears,
            id: 'monthSelector',
            oncreate: () => actions.setSelectedSchoolYear(getSchoolYear(new Date())),
            onchange: (value) => actions.setSelectedSchoolYear(Number(value)),
            options: schoolYearsOptionsList(),
        }),
        h('span', {id: 'selectMonthOrYearButtons'}, [
            h('button', {disabled : !state.bShowYears, onclick: actions.switchOverTimeChart},
                'Par mois'
            ),
            h('button', {disabled : state.bShowYears, onclick: actions.switchOverTimeChart},
                'Par année'
            ),
        ])
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
        return {
            label: str,
            value: year,
        }
    })
    return list
}
