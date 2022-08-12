import './App.css';
import { LogoComponent } from './components/LogoComponent';
import TodoPage from './pages/todo';
import './styles/layout.css';
function App() {
  //this tutorial is all about how to create elements and components in react.
  /* 
    Project Road Map
    1. Week 2
      c. Handle add todo item ✅
      d. Let user choose the priority of the todo item ✅ (low, medium, high, urgent)
      d. Handle Toggle todo functionality ✅
      e. Handle Delete todo functionality✅

    2. Week 3
      a. Divide todos into 4 columns (low, medium, high, urgent) 
      b. Handle changing todo item's priority 
      c. Handle edit todo text functionality 

    3. Week 4
      b. Search for todo functionality 
      c. Convert the whole project to use React Hooks 🪝

  */
  return (
    <main className='App main-layout'>
      <section className='side-navbar-section'>
        <LogoComponent />
      </section>
      <TodoPage />
    </main>
  );
}

export default App;
