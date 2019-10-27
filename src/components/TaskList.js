import React from "react";
import Task from "./Task";
const TaskList = props => {
  const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />);
  return (
    <div>
      <div className="active">
        <div>Miliony rzeczy do ogarnięcia</div>
        <hr />
        {tasks}
      </div>
      <div className="done">
        <div>Miliony rzeczy do ogarnięcia</div>
        <ul />
        <hr />
      </div>
    </div>
  );
};

export default TaskList;
