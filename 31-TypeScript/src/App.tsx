import NewToDo from './components/NewToDo';
import ToDos from './components/ToDos';
import ToDosContextProvider from './store/ToDosContext';

function App() {
  return (
    <ToDosContextProvider>
      <h2>Hello Victor, how are you today?</h2>
      <NewToDo />
      <ToDos />
    </ToDosContextProvider>
  );
}

export default App;
