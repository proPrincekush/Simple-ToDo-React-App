import React, { useState } from "react";
import "./styles.css";
import Items from "./todoItem";

export default function Todo() {
  const [tasks, setTasks] = useState("");
  const [mytask, setMyTask] = useState(["smile please :) "]);

  function handleChange(event) {
    let { value } = event.target;
    setTasks(value);
  }

  function handleSubmit() {
    console.log(tasks);
    setMyTask([...mytask, tasks]);
    setTasks("");
  }

  function handleDelete(data) {
    // console.log(data);
    // console.log(mytask);
    let itemIndex = mytask.indexOf(data);
    mytask.splice(itemIndex, 1);
    setMyTask([...mytask]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" onChange={handleChange} name="task" value={tasks} />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {mytask.map(task => (
            <Items item={task} delt={handleDelete} key={mytask.indexOf(task)} />
          ))}
        </ul>
      </div>
    </div>
  );
}
