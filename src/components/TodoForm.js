import React from "react";

function TodoForm(props) {

    return (
      <div>
        <div className="top-add">
          <form onSubmit={props.addItem}>
            <input
              type="text"
              placeholder="Add Task"
              value={props.items.text || ""}
              onChange={props.handleChange}
            />
            <button type="submit" disabled={!props.items.text}>
              <i className="fas fa-plus plus-icon"></i>
            </button>
          </form>
        </div>
      </div>
    );
}

export default TodoForm;