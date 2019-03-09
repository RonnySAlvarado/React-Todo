import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import '../src/components/TodoComponents/Todo.css';


const todoListInfo = [
  {id: Date.now(), tasks: 'Work in the field', completed: false},
  {id: Date.now(), tasks: 'Work in the office', completed: false},
  {id: Date.now(), tasks: 'Work on projects', completed: false}
];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasksArray: todoListInfo,
      tasks: '',
      search: '',
    }
  }

  inputChangeHandler = event => {
    this.setState( {[event.target.name]: event.target.value} );
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
      else return null;
    })});
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    // console.log(this.state.tasks);
    let filteredArray = this.state.tasksArray.filter((filteredTask) => {
      return filteredTask.tasks.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    return (
      <div className="container">
        <h1>Tasks</h1>
        <input className="searchBar" type="text" placeholder="search" onChange={this.inputChangeHandler} value={this.state.search} name="search"></input>
        <TodoList 
          tasks={this.state.tasks} 
          completed={this.state.completed}
          tasksArray={this.state.tasksArray} 
          filteredArray={filteredArray}
          inputChangeHandler={this.inputChangeHandler} 
          submitHandler={this.submitHandler} 
          clickHandler={this.clickHandler}
          clearHandler={this.clearHandler}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default App;

//initial commit
