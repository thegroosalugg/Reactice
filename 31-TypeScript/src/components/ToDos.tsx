import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { TodosContext } from "../store/ToDosContext";

export default function ToDos() {
  const { todos, deleteToDo } = useContext(TodosContext);

  return (
    <ul className='todos'>
      {todos.map(({id, text}) => (
        <ToDoItem key={id} text={text} onDelete={() => deleteToDo(id)} />
      ))}
    </ul>
  );
}
