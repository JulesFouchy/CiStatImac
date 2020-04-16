import { h } from 'hyperapp'

// basic componant with props
export default (props) =>
    h(
        'div',
        {
            class: 'box',
            style: 'width=100px'// + props.width + 'px height=' + ((props.height+'px')||'auto')
        },
        props.content
    )
