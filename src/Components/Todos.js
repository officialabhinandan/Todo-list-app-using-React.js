import React from 'react'
import TodoItem from './TodoItem';

const Todos = (props) => {
    let apnaStyle = {
        minHeight: "70vh", 
        margin : "30px auto"
    }
   
  return (
    <div className='container' style={apnaStyle}>
      <h3 className='my-3'>My Todo list</h3>
      {props.todos.length===0? "No todos to display" : 
      props.todos.map((todo) => {
         return ( 
        
         <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
         
          )
      })
    }
     

    </div>
  )
}
export default Todos;




