import { useState } from "react"
import "./App.css"
import TodoItem from "./Components/TodoItem"
import { initialTodos } from "./TodoData"
import type { TodoItem as TodoItemType } from "./TodoData"
import backgroundimage from "./assets/Flowers.jpg"

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(initialTodos)
  const [inputValue, setInputValue] = useState<string>("")

  function handleToggleComplete(id: number) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  function handleDelete(id: number) {
    const remainingTodos = todos.filter((todo) => todo.id !== id)
    setTodos(remainingTodos)
  }

  function handleAddTodo() {
    if (inputValue.trim() === "") return

    const newTodo: TodoItemType = {
      id: Date.now(),
      title: inputValue,
      time: "Today at 12:00 PM",
      completed: false,
    }

    setTodos([...todos, newTodo])
    setInputValue("")
  }

  return (
    <>
      <div className="app">
        <h1 className="main-logo-title">Todo</h1>

        <main className="todo-card">
          <header
            className="card-header"
            style={{ backgroundImage: `url(${backgroundimage})` }}
          >
            <div className="header-overlay">
              <span className="header-date">Thur 9</span>
              <h2 className="header-time">6:23 AM</h2>
            </div>
          </header>

          <section className="input-section">
            <div className="input-wrapper">
              <span className="input-icon">✓</span>

              <input
                type="text"
                placeholder="Note"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="todo-input"
              />
            </div>

            <button className="add-button" onClick={handleAddTodo}>+</button>
          </section>

          <section className="todo-list">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDelete}
              />
            ))}
          </section>
        </main>
      </div>
    </>
  )
}

export default App