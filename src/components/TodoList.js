import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'



function TodoList() {
    const [todos,setTodos] = useState([])

    const addTodo = todo =>{
        if(!todo.text||/^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [...todos,todo]
        setTodos(newTodos)
        
    }

    const updateTodo = (todoId,newValue)=>{
        if(!newValue.text||/^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(todos.map(item=>(item.id===todoId?newValue:item)))
    }
    const completeTodo = id =>{
        let updatedtodos = todos.map((todo,index)=>{
            if(todo.id===id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedtodos)
    }

    const removeTodo = id =>{
        let removeArr = todos.filter(todo=>todo.id!==id)
        setTodos(removeArr)
    }
  return (
    <div >
        <h1>What's The Plan For Today</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList
