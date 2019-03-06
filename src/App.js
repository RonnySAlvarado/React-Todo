import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"


const todoListInfo = [
  {id: 1, tasks: 'Work in the field', completed: false},
  {id: 2, tasks: 'TK prep', completed: false},
  {id: 3, tasks: 'Finish Day 1 challenge', completed: false}
];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasksArray: todoListInfo
    }
  }

  inputChangeHandler = event => {
    // this.setState({ task: event.target.task });
    console.log('Typing...');
  };


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList tasksArray={this.state.tasksArray} inputChangeHandler={this.inputChangeHandler} />
      </div>
    );
  }
}

export default App;

//initial commit
