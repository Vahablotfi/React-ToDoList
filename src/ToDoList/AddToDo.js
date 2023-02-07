import React, { useState } from 'react'


function AddToDo({onAdd}) {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");


  const currentDate = new Date(); 


  const onSubmit = (e) => {
    e.preventDefault();
    const dateTester = new Date(deadline);
    if (!description) {
      alert("please enter your Task first");
      return;
    } else if (!deadline) {
      alert("please enter your deadline first");
      return;
    } else if (currentDate.valueOf() >= dateTester.valueOf()) {
      alert("Dead line can not be in the past!!");
      return;
    }
    onAdd( { description, deadline } );
      setDescription("");
    setDeadline("");
  };

  return (
    <>
      <div className="header">
        <h1>Add a task to your Todo list</h1>
      </div>

      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Dead Line</label>
          <input
            type="date"
            placeholder="DeadLine"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Add to your list"
          className="btn btn-block"
        ></input>
      </form>
    </>
  );
}

export default AddToDo