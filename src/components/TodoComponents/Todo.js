import React from 'react';

function Todo (props) {
    return (
        <li onClick={() => props.clickHandler(props.index)}>{props.eachTask.tasks}</li>
    )
}
export default Todo;