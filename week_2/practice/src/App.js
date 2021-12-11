import React from 'react';
import './App.css';
import { LogoComponent } from './components/LogoComponent';
import TodoListPage from './pages/todo';
import './styles/layout.css';

/* 
  Project Road Map
    1. Week 2
      a. Create a TodoList component ✅
      b. Create a TodoItem component ✅
      c. Handle add todo item ✅
      d. Let user choose the priority of the todo item ✅ (low, medium, high, urgent)
      d. Handle Toggle functionality ✅
      e. Handle Delete todo functionality✅

    2. Week 3
      a. Divide todos into 4 columns (low, medium, high, urgent) 
      b. Handle changing todo item's priority 
      c. Handle edit todo text functionality 

    3. Week 4
      b. Search for todo functionality 
      c. Convert the whole project to use React Hooks 🪝
*/

/* 
  Homework for Week 2 
    1. Add a button to show only completed todos 
*/

function App() {
  return (
    <main className='App main-layout'>
      <section className='side-navbar-section'>
        <LogoComponent />
      </section>
      <TodoListPage />
    </main>
  );
}

export default App;
