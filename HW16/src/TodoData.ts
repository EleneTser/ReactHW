export interface TodoItem {
  id: number
  title: string
  time: string
  completed: boolean
}

export const initialTodos: TodoItem[] = [
  {
    id: 1,
    title: "Dinner",
    time: "Today at 8:00 PM",
    completed: true
  },
  {
    id: 2,
    title: "Walk with Coby",
    time: "Today at 3:30 PM",
    completed: false
  },
  {
    id: 3,
    title: "Buy Groceries",
    time: "Today at 10:00 AM",
    completed: false
  },
  {
    id: 4,
    title: "Go to repair shop",
    time: "Today at 9:00 AM",
    completed: false
  }
]