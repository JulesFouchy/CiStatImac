import { h } from 'hyperapp'
import Section from '../components/Section'
import Box from '../components/Box'


export default () => {
    return (
        Section({
            id: 'intro',
            title: 'CiStat\'Imac',
            children: [
                h('p', {class: 'introText'}, 'Cela fait 1 an que vous avez pris en main le Citat\'Imac. Vous l\'avez aimé, vous l\'avez nourri... Voyons le résultat !'),
                h('a', {href: 'http://citatimac.alwaysdata.net/', class:'citatimacButton'},
                    Box({content:
                        'Citat\'Imac'
                    })
                )
            ]
        })
    )
}

