import React from 'react'
import  { useEffect, useState } from 'react';
import AddToDo from './AddToDo';
import Header from './Header'
import ToDoItems from './ToDoItems';
import './UpdateToDo.css'



 


function UpToDo() {
    const [toDos, setToDos] = useState([])

    useEffect(() => {
      const getToDos = async () => {
      const savedToDos = await fetchToDos()
          setToDos(savedToDos) 
      }
    getToDos()
    }, [])
    
     
  
      const fetchToDos = async () => {
      const res = await fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
       const data = await res.json()
         return data
      }
  
  

        const deleteToDo = (id) => {
    setToDos(toDos.filter((toDo)=>toDo.id!==id))
        }
    
    
    const addToDos = (ToDo) => {
        const newTaskId =toDos.length+1;
        const newTask = {
            id: newTaskId, 
            description: ToDo.description,
            deadline:ToDo.deadline
         }
      setToDos([...toDos, newTask])       
    }
  
  
    
  return (
      <div className='container'>
      <Header></Header>
      
      
        <AddToDo
        onAdd={addToDos}>
       </AddToDo>
      
      
         {toDos.length > 0 ?
              <ToDoItems
                  toDos={toDos} onDelete={deleteToDo}
              >   
              </ToDoItems> :
              ' You Have done all your Todo list'}
      
         
    </div>
  )
}

export default UpToDo