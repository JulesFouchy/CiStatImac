import { h } from 'hyperapp'
import Button from './Button'

export default (props) =>
    h('form', { class: 'formTime' }, [
        Button({class: 'buttonTime', text: 'Les années', selected : true, onClick: props.updateYear}),
        Button({class: 'buttonTime',  text: 'Les mois', onClick: props.updateMonth }),
        h('select',{
            id : 'monthSelector'}, 
            [
                h('option', {
                    value: '2018',
                    label: '2018'
                }),
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