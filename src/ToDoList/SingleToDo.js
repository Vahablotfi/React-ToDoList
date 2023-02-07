import { FaTimes } from 'react-icons/fa'
import Buttons from './Buttons'
import { useState } from 'react';
import UpdateForm from './UpdateForm';
import Popup from './Popup';



function SingleToDo({ toDo, onDelete, }) {
    
  const [item, setItems] = useState(toDo)
  const [popupButton, setPopupButton] = useState(false);
  const [isChecked, setIsChecked] = useState(false)
   
  const doneTask = (id) => {
    isChecked === false ? setIsChecked(true) : setIsChecked(false)
  }


  const updateTask = (e) => {
    setItems({
      ...item,
      description: e,
    })
  }
  
  const updateDeadline = (e) => {
    setItems({
      ...item,
      deadline: e,
    })
  }

  return (
    
    <>
      {popupButton ?
        <Popup trigger={setPopupButton} setTrigger={popupButton}>
          <UpdateForm onUpdate={updateTask} onDeadline={updateDeadline} props={item}></UpdateForm>
        </Popup> :
        <div className='task'>
          <div className='form-control-check'>
            <h3 style={isChecked === true ? { textDecoration: "line-through" } : {}} >
              {item.description}
            </h3>
              
            {isChecked === true ? <h3 style={{ color: 'Green' }}>Done!!</h3> :
              <h5 style={{ color: 'red' }}>Has to be Done by {item.deadline}</h5>}
            <label>Mark as Done</label>
            <input type='checkbox' onChange={doneTask} ></input>
            
          </div>
          
          <div >
            <Buttons text='clear' backgroundColor='black' onClick={() => onDelete(toDo.id)} />
            <Buttons text='Edit' backgroundColor='black'
              onClick={() => setPopupButton(true)} >
            </Buttons>
            <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(toDo.id)} />
          </div>
     
     
          <Popup trigger={popupButton} >
            <UpdateForm onUpdate={updateTask} onDeadline={updateDeadline} props={item}></UpdateForm>
          </Popup>
        </div>
      }
    </>

    
  )
}



export default SingleToDo