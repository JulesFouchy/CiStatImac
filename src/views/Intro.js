import { h } from 'hyperapp'
import Section from '../components/Section'
import Box from '../components/Box'


export default (state) => {
    return (
        Section({
            id: 'intro',
            title: 'CitatiStats',
            children: [
                h('p', {class: 'introText'}, 'Petite description lalala'),
                h('a', {href: 'http://perso-etudiant.u-pem.fr/~akohlmul/citatimac/'}, 
                    Box({content:
                        'Citat\'Imac'
                    })
                )
            ]
        })
    )
}

