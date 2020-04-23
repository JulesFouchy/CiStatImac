import { h } from 'hyperapp'

export default (props) =>
    h('span', 
        {
            class: 'dropdownList',
            id: props.id,
            oncreate: () => props.oncreate(),
        },
        [
            h('button', {
                class: 'dropdownButton',
                onclick: toggleDropdown,
            }),
            h('div', {class: 'dropdownContent', id: 'myDropdown'},
                props.options.map( el =>
                    h('div',
                        {
                            ...el,
                            onclick: () => props.onchange(el.value)
                        },
                        el.label
                    )
                )
            )
        ]
    )

const toggleDropdown = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = (event) => {
    if (!event.target.matches('.dropdownButton')) {
        const dropdowns = document.getElementsByClassName("dropdownContent")
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
  }