import React from 'react'
import TodoForm from './TodoForm'

function Todo() {
    const [edit,setEdit] = useState({
        id: null,
        value: ''
    })
  return Todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete': 'todo-row'} 
    key={index}>
        
    </div>
  )
}

export default Todo

