import { useState, useEffect } from 'react'
import { useTheme } from './ThemeContext.js';
import './App.css'

interface TodoItem {
  id: string,
  text: string,
  isCompleted: boolean
}

function App() {

  const taskMemoryKey = 'todos'

  const {theme, toggleTheme} = useTheme()
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  
  const addTask = (): void => {
    if(newTodo !== '') {
      const newId = crypto.randomUUID()
      const newTodoItem: TodoItem = {
        id: newId,
        text: newTodo,
        isCompleted: false
      }
      setTodos([...todos, newTodoItem])
      setNewTodo('')
    }
  }
  
  const removeTask = (id: string): void => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }
  
  const onCheckboxClick = (id: string): void => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  
  const getCompletedTasks = (): TodoItem[] => {
    return todos.filter((todo) => todo.isCompleted)
  }

  useEffect(() => {
    if(isLoaded) {
      localStorage.setItem(taskMemoryKey, JSON.stringify(todos))
    }
  }, [todos, isLoaded])

  useEffect(() => {
    const tasksSaved = localStorage.getItem(taskMemoryKey)

    if(tasksSaved) {
      setTodos(JSON.parse(tasksSaved))
    }

    setIsLoaded(true)
  }, [])
  
  return (
    <div className={`app ${theme}`}>
      <div className={`container ${theme}`}>
        <h1> To do List - {getCompletedTasks().length} / {todos.length} </h1>
        <div className="input-container">
          <input type="text" value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}} />
          <button onClick={addTask}> Add task </button>
        </div>
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.isCompleted} onChange={() => onCheckboxClick(todo.id)}/>
              <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none'}}>{todo.text}</span>
              <button onClick={() => { removeTask(todo.id) }}> Remove </button>
            </li>
          ))}
        </ol>
          <button onClick={() => {toggleTheme()}}>
            Change theme {theme === 'light' ? 'dark' : 'light'}
          </button>
      </div>
    </div>
  )
}

export default App
