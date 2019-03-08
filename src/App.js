import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import '../src/components/TodoComponents/Todo.css';


const todoListInfo = [
  {id: Date.now(), tasks: 'Work in the field', completed: false},
  {id: Date.now(), tasks: 'TK prep', completed: false},
  {id: Date.now(), tasks: 'Finish Day 1 challenge', completed: false}
];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasksArray: todoListInfo,
      tasks: '',
    }
  }

  inputChangeHandler = event => {
    this.setState( {tasks: event.target.value} );
  };

  submitHandler = event => {
    event.preventDefault();
    let newTask = {
      id: Date.now(),
      tasks: this.state.tasks,
      completed: false
    };
    this.setState({ tasksArray: [...this.state.tasksArray, newTask], tasks: ''});
  }

  clickHandler = (index) => {
    this.setState ({ tasksArray: this.state.tasksArray.map(function (task, i){
      if (i === index){ 
        return {...task, completed: !task.completed};
      }
      else return task;
    })});
    // console.log(this.state.tasksArray);
  };

  clearHandler = event => {
    event.preventDefault();
    this.setState ({  tasksArray: this.state.tasksArray.filter(function (task) {
      if (task.completed === false) {
          return task;
      }
    })});
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    // console.log(this.state.tasks);
    return (
      <div className="container">
        <h1>My awesome To-do List!</h1>
        <TodoList 
          tasks={this.state.tasks} 
          completed={this.state.completed}
          tasksArray={this.state.tasksArray} 
          inputChangeHandler={this.inputChangeHandler} 
          submitHandler={this.submitHandler} 
          clickHandler={this.clickHandler}
          clearHandler={this.clearHandler}
        />
      </div>
    );
  }
}

export default App;

//initial commit
