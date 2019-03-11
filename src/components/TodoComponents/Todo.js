import React from 'react';

function Todo (props) {
    let completed = props.eachTask.completed ? "completed" : "";
    return (
        <h3 className={`task-style ${completed}`} onClick={() => props.clickHandler(props.index)}>{props.eachTask.tasks}</h3>
    )
}
export default Todo;