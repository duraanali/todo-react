import React from "react";
import "../App.css";

function taskList(props) {
  const items = props.items;

  const taskStatus = items.map((item) => {
    return item.isCompleted;
  });

  const notCompleted = taskStatus.filter((item) => {
    return item !== true;
  });

  const completedTasks = taskStatus.filter((item) => {
    return item === true;
  });

  return (
    <div className="task-card">
      {items.map((item) => (
        <div
          className={item.isCompleted ? "task-done" : "task-header"}
          key={item.key}
        >
          <div className="task-title" key={item.key}>
            <input
              style={{
                textDecoration: item.isCompleted ? "line-through" : "",
              }}
              type="text"
              id={item.key}
              value={item.text}
              onChange={(e) => {
                props.setUpdate(e.target.value, item.key);
              }}
            />
            <i
              className="fas fa-trash fa-lg task-icon"
              onClick={() => {
                props.deleteItem(item.key);
              }}
            ></i>

            <i
              className="fas fa-check-circle fa-lg task-icon"
              style={{
                cursor: "default",
              }}
              onClick={() => {
                props.completeTodo(item.key);
              }}
            >
              {" "}
            </i>
          </div>
        </div>
      ))}
      <div className="all-tasks">
        <div className="task-msg">{notCompleted.length} Tasks Left</div>
        <div className="task-msg-right">{completedTasks.length} Completed</div>
      </div>
    </div>
  );
}

export default taskList;
