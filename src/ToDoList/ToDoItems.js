import SingleToDo from "./SingleToDo"


function ToDoItems({ toDos, onDelete,}) {

  

  return (
    <div>
      {toDos.map((toDo) => (
      <SingleToDo key={toDo.id}
        toDo={toDo}
        onDelete={onDelete}
        />
    ))}
    </div>
  )
}

export default ToDoItems