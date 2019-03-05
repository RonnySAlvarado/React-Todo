import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      task: '',
      id: Date.now(),
      completed: false
    }
  }

  inputChangeHandler = event => {
    this.setState({ task: event.target.task });
    console.log(this.state.task);
  };


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList 
          inputChangeHandler={this.inputChangeHandler}
          task={this.task}
          completed={this.completed}
        />
      </div>
    );
  }
}

export default App;

//initial commit
