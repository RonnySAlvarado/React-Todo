// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList (props) {
    return (
        <div>
            {props.tasksArray.map((eachTask) => {return <Todo eachTask={eachTask} />})}
            <TodoForm inputChangeHandler={props.inputChangeHandler} tasksArray={props.tasksArray} />
        </div>
    );
};

export default TodoList;