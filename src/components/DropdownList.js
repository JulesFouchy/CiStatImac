import { h } from 'hyperapp'

export default (props) =>
    h('span', 
        {
            class: 'dropdownList',
            id: props.id,
            oncreate: () => props.oncreate(),
        },
        [
            h('button', 
                {
                    class: 'dropdownButton',
                    hidden: props.hidden,
                    onclick: toggleDropdown,
                },
                [
                    h('span', {id: 'ddText'}, props.options[0].label + ' '),
                    h('i', {class: 'fas fa-angle-down', id: 'ddIcon'}),
                ]
            ),
            h('div', {class: 'dropdownContent', id: 'myDropdown'},
                props.options.map( el =>
                    h('div',
                        {
                            class: 'dropdownContentElement',
                            ...el,
                            onclick: () => {
                                props.onchange(el.value)
                                document.getElementById('ddText').innerHTML = el.label + ' '
                            }
                        },
                        [
                            el.label + ' ',
                            h('i', {class: 'fas fa-angle-down', style: 'visibility: hidden;', id: 'ddIcon'}),
                        ]
                    )
                )
            )
        ]
    )

const setIconUp = () => {
    document.getElementById('ddIcon').className = 'fas fa-angle-up'
}
const setIconDown = () => {
    document.getElementById('ddIcon').className = 'fas fa-angle-down'
}

const toggleDropdown = () => {
    if (document.getElementById("myDropdown").classList.contains("show"))
        setIconDown()
    else
        setIconUp()
    document.getElementById("myDropdown").classList.toggle("show")
}

window.onclick = (event) => {
    if (!(event.target.matches('.dropdownButton') || event.target.matches('#ddText') || event.target.matches('#ddIcon'))) {
        const dropdowns = document.getElementsByClassName("dropdownContent")
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
        setIconDown()
    }
  }