import ToDos from './components/ToDos';
import ToDo from './models/ToDo';

function App() {
  // when using classes we do not need to construct an object explicitly and can just pass required data
  const todos = [new ToDo('Hello mother'), new ToDo('Hello mother father')];

  return (
    <main>
      <h2>Hello Victor, how are you today?</h2>
      <ToDos items={todos} />
    </main>
  );
}

export default App;
