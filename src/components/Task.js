import React from "react";

const Task = props => {
  const { text, date, id } = props.task;

  return (
    <h3>
      <p>{text}</p>
      <p>do {date}</p>
      <button onClick={() => props.change(id)}>Zostało zrobione</button>
      <button onClick={() => props.delete(id)}>X</button>
    </h3>
  );
};
export default Task;
