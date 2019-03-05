import React from 'react';

function TodoForm (props) {
    return (
        <form>
            <input type="text" placeholder="...todo" onChange={props.inputChangeHandler}></input>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;