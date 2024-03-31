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

// const ToDosContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {          // FC const version
function ToDosContextProvider({ children }: { children: React.ReactNode }) {
  // state type should be an array of ToDo class objects
  const [todos, setTodos] = useState<ToDo[]>(
    // in TS JSON.parse always expects a string, but savedData could also be null, so if there's none a stringified array is passed
    JSON.parse(localStorage.getItem('savedData') || '[]') // initialise with localStorage if it exists or []
  );

  // function expects a string which is passed to the class object
  const addToDo = (text: string) => {
    const newToDo = new ToDo(text);
    setTodos((prevTodos) => [newToDo, ...prevTodos]);
    localStorage.setItem('savedData', JSON.stringify([newToDo, ...todos])); // save to local storage
  };

  const deleteToDo = (deleteId: number) => {
    const updatedToDos = todos.filter(({ id }) => id !== deleteId);
    setTodos(updatedToDos);
    localStorage.setItem('savedData', JSON.stringify(updatedToDos)); // save to local storage
  };

  const context: contextType = {
    todos,
    addToDo,
    deleteToDo,
  };

  return <TodosContext.Provider value={context}>{children}</TodosContext.Provider>;
}

export default ToDosContextProvider;
