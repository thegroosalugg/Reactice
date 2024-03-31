import { createContext, useState } from 'react';
import ToDo from '../models/ToDo';

// FC type declared is a function that takes a  string as an argument and does not return any value (void)
type contextType = {
  todos: ToDo[];
  addToDo: (text: string) => void;
  deleteToDo: (id: number) => void;
};

export const TodosContext = createContext<contextType>({
  todos: [],
  addToDo: () => {},
  deleteToDo: () => {},
});

const ToDosContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // state type should be an array of ToDo class objects
  const [todos, setTodos] = useState<ToDo[]>([]);

  // function expects a string which is passed to the class object
  const addToDo = (text: string) => {
    const newToDo = new ToDo(text);
    setTodos((prevTodos) => [newToDo, ...prevTodos]);
  };

  const deleteToDo = (deleteId: number) => {
    const updatedToDos = todos.filter(({ id }) => id !== deleteId);
    setTodos(updatedToDos);
  };

  const context: contextType = {
    todos,
    addToDo,
    deleteToDo,
  };

  return <TodosContext.Provider value={context}>{children}</TodosContext.Provider>;
};

export default ToDosContextProvider;
