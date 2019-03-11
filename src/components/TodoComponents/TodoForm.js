import React from 'react';

function TodoForm (props) {
    return (
        <form onSubmit={props.submitHandler}>
            <input type="text" placeholder="Add a to-do..." onChange={props.inputChangeHandler} value={props.tasks} name="tasks"></input>
            <div className="addClearContainer">
                <button className="add">Add Todo</button>
                <button className="clear" type="button" onClick={props.clearHandler}>Clear Completed</button>
            </div>
        </form>
    )
}

export default TodoForm;