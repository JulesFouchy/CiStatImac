import { h } from 'hyperapp'

export default (state, actions, props) =>
    h('div', {class: 'formTime'}, [
        h('button', {disabled : state.bShowYears, onclick: actions.switchOverTimeChart},
            'Par année'
        ),
        h('button', {disabled : !state.bShowYears, onclick: actions.switchOverTimeChart},
            'Par mois'
        ),
        h('select',{
            disabled : true,
            id: 'monthSelector',
        },
            [
                h('option',{
                     
                value: '2019',
                label : '2019'
                }),
                h('option', {
                    value: '2020',
                    label: '2020'
                }),
                h('option', {
                    value: '2021',
                    label: '2021'
                }),
            ],
        )
     //Bouton byMonth
     // Slider pour les mois / années
    ])