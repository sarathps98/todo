import React,{useState} from 'react'
import TodoForm from './TodoForm'

function Todos({todos,completeTodo,removeTodo,updateTodo}) {
  const[edit,setEdit] = useState(
    {
      id:null,
      value:''
    }
  )
 

  const submitUpdate = value =>{
    updateTodo(edit.id,value)
    setEdit(
      {
        id:null,
        value:''
      }
    )
  }
  if(edit.id){
    return<TodoForm edit={edit} onSubmit={submitUpdate}/>
  }
  return todos.map((todo,index)=>(
    <div 
    key={index}
    className={todo.isComplete? 'todo-row complete':'todo-row'}
    >
       <div className='left'  key={todo.id}>{todo.text}
       </div>
       <div className="right">
       <i className="fa-solid fa-circle-check" onClick={()=>completeTodo(todo.id)}></i>
       <i className="fa-solid fa-pen-to-square" onClick={()=>setEdit({id:todo.id,value:todo.text})}></i>
       <i className="fa-solid fa-circle-xmark" onClick={()=>removeTodo(todo.id)}></i>
      
       
              </div>
       
    </div>
    ))
  
}

export default Todos
