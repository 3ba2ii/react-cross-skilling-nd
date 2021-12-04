import './App.css';
import TodoList from './components/TodoList';

function App() {
  //this tutorial is all about how to create elements and components in react.
  /* 
    1. create a TodoList component
    2. Render the TodoList component
    3. Explore composition with the TodoList and TodoItem components
    4. Explore the unidirectional data flow with the TodoList component

  */
  return (
    <div className='App'>
      <TodoList />
    </div>
  );
}

export default App;
