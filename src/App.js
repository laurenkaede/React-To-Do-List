import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    task: '',
    allTasks: []
  };

  setTask = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  addTask = () => {
    this.setState({
      allTasks: [...this.state.allTasks, this.state.task]
    });
  };
  
  removeTask(item) {
    const newTaskItems = this.state.allTasks.filter(allTasks => {
      return allTasks !== item;
    });
    this.setState({
      allTasks: [...newTaskItems]
    })
  };

  resetInput = () => {
    this.setState({
      task: ''
  })
  };

  render () {
    const items = this.state.allTasks.map((item, index) => {
      return (
        <p key={index}>
          {item}
          <button className="removeBtn" onClick={(e)=> this.removeTask(item)}>X</button>
          
        </p>
      );
    });
  
      return (
        <div className= "main">
          <div className= "container">
            <h1>Lauren's To - Do List</h1> <br/>
            <input className="inputBox" onChange={event => this.setTask(event)} type="text" placeholder="Add Task" />
            <button className="addBtn" onClick={this.addTask} onReset={this.resetInput}>Add Task</button>
            {items}
          </div>
        </div>
      );
    }
  }
  export default App;