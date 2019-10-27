import React, { Component } from "react";

import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import "./App.css";

class App extends Component {
  deleteTask = id => {
    console.log("delete elementu o id" + id);
  };

  changeTaskStatus = id => {
    console.log("changeee w stanie elementu o id" + id);
  };

  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w wiedźmina 3",
        date: "2019-10-10",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Kurła kurłą nie mam pojęcia",
        date: "2019-10-11",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
