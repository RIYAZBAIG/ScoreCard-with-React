"use client"

import { useState } from "react"
import { Plus, Trash2 } from "lucide-react"

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  // const addTodo = () => {
  //   if (newTodo.trim() !== "") {
  //     setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
  //     setNewTodo("")
  //   }
  // }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  const addTodo = () => {
    if (newTodo.trim() !== "") {
      console.log("Input Value:", newTodo) // 👈 Console me value show karega
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo("")
    }
  }
  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow mr-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Plus className="h-4 w-4 mr-2 inline-block" />
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-3 rounded">
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor={`todo-${todo.id}`}
                className={`ml-2 ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
              >
                {todo.text}
              </label>
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700 focus:outline-none">
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList

