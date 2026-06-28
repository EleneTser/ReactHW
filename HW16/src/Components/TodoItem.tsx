import type { TodoItem as TodoItemType } from "../TodoData.ts"

interface HandleTodo {
    todo: TodoItemType;
    onToggleComplete: (id: number) => void
    onDelete: (id: number) => void
}

export default function TodoItem({todo, onToggleComplete, onDelete}: HandleTodo) {
    return (
    <>
      <div className="todo-item">
        <div className="todo-info">
          <h3 className={`todo-title ${todo.completed ? "completed-text" : ""}`}>{todo.title}</h3>
          <p className="todo-time">{todo.time}</p>
        </div>

        <div className="todo-actions">
          <button
            className={`status-btn ${todo.completed ? "checked" : "unchecked"}`}
            onClick={() => {
              onToggleComplete(todo.id)
            }}>
                {todo.completed ? "✓" : ""}
          </button>

          <button className="delete-btn" onClick={() => {onDelete(todo.id)}}>🗑</button>
        </div>
      </div>
    </>
  )
}