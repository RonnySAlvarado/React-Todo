import React from 'react';

function Todo (props) {
    let completed = props.eachTask.completed ? "completed" : "";
    return (
        <li className={`${completed}`} onClick={() => props.clickHandler(props.index)}>{props.eachTask.tasks}</li>
    )
}
export default Todo;