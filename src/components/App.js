import React, { Component }
from 'react';

import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AddTask/>
                <TaskList/>
            </div>
        );
    }
}

export default App;
