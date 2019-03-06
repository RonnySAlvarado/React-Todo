import React from 'react';

function TodoForm (props) {
    return (
        <form onSubmit={props.submitHandler}>
            <input type="text" placeholder="...todo" onChange={props.inputChangeHandler} value={props.tasks}></input>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;