import { h } from 'hyperapp'
import Section from '../components/Section'
import Button from '../components/Button'


export default (state) => {
    return (
        Section({
            id: 'intro',
            title: 'CitatiStats',
            children: [
                h('p', {class: 'introText'}, 'Petite description lalala'),
                Button({ text: 'Essai', onclick: "location.href = 'www.google.com';"})
            ]
        })
    )
}

