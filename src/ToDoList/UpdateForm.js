 import React from 'react'

function UpdateForm({onUpdate,props,onDeadline}) {

  return (
      <div>
           <label>Task</label>
                <input type="text" placeholder='Task'
                        value={props.description} onChange={(e)=>onUpdate(e.target.value)}/>
          
          <label>Dead Line</label>
          <input type="date" placeholder='DeadLine'
              value={props.deadline} onChange={(e)=>onDeadline(e.target.value)}/>
    </div>
  )
}

export default UpdateForm