import { useState } from 'react';
import NewToDo from './components/NewToDo';
import ToDos from './components/ToDos';
import ToDo from './models/ToDo';

function App() {
  // state type should be an array of ToDo class objects
  const [todos, setTodos] = useState<ToDo[]>([]);

  // function expects a string which is passed to the class object
  const addToDoHandler = (text: string) => {
    const newToDo = new ToDo(text);
    setTodos((prevTodos) => [newToDo, ...prevTodos]);
  };

  return (
    <main>
      <h2>Hello Victor, how are you today?</h2>
      <NewToDo addToDo={addToDoHandler} />
      <ToDos items={todos} />
    </main>
  );
}

export default App;
