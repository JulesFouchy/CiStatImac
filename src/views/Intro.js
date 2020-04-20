import { h } from 'hyperapp'
import Section from '../components/Section'

export default (state) => {
    return (
        Section({
            id: 'intro',
            title: 'CitatiStats',
            children: [
                h('p', {class: 'introText'}, "Petite description lalala"),
                //h('button', {onclick: "www.google.fr"}) 
            ]
        })
    )
}

// h('button', { onclick: props.onClick }, props.text)
