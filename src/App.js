import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({
    items: [],
  });

  function handleChange(event) {
    let newEdit = { ...todo };

    newEdit.items.text = event.target.value;
    setTodo(newEdit);
  }

  function addItem(event) {
    event.preventDefault();
    let textInput = todo.items.text;

    let newItem = {
      text: textInput,
      key: Math.floor(Math.random() * 50000),
      isCompleted: false,
    };

    if (newItem.text !== "") {
      const newItems = [...todo.items, newItem];
      setTodo({
        items: newItems,
      });
    }

    event.target.reset();
  }

  function deleteItem(key) {
    const deletedToDo = todo.items.filter((item, index) => {
      return item.key !== key;
    });
    setTodo({
      items: deletedToDo,
    });
  }

  function completeTodo(key) {
    const completedToDo = todo.items.map((todo) => {
      if (todo.key === key) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });

    setTodo({
      items: completedToDo,
    });
  }

  function setUpdate(text, key) {
   
    const editedItem = todo.items.map((item) => {
      
      if (item.key === key) {
        return { ...item, text: text };
      } else {
        return item;
      }
    });

    setTodo({
      items: editedItem,
    });


  }

    useEffect(() => {
      getLocalStorage();
   
    }, []);

    useEffect(() => {
      saveToLocalStorage();

    }, [todo.items]);

    function saveToLocalStorage() {
      localStorage.setItem("todo", JSON.stringify(todo.items));
    }

    function getLocalStorage() {
      if (localStorage.getItem("todo") === null) {
        localStorage.setItem("todo", JSON.stringify([]));
      } else {
        let localData = JSON.parse(localStorage.getItem("todo"));
        setTodo({ items: localData });
      }
    }

  return (
    <div>
      <main>
        <TodoForm
          addItem={addItem}
          items={todo.items}
          handleChange={handleChange}
        />
        <TodoList
          items={todo.items}
          deleteItem={deleteItem}
          setUpdate={setUpdate}
          completeTodo={completeTodo}
        />
      </main>
    </div>
  );
}

export default App;
