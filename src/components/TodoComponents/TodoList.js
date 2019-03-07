// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList (props) {
    return (
        <div>
            {props.tasksArray.map((eachTask, index) => {return <Todo index={index} clickHandler={props.clickHandler} eachTask={eachTask}/>})}
            <TodoForm inputChangeHandler={props.inputChangeHandler} submitHandler={props.submitHandler} tasksArray={props.tasksArray} tasks={props.tasks} />
        </div>
    );
};

export default TodoList;