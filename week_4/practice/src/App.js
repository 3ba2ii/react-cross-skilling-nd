import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { LogoComponent } from './components/LogoComponent';
import About from './pages/about';
import HomePage from './pages/home';
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
      a. Divide todos into 4 columns (low, medium, high, urgent) ✅
      b. Handle changing todo item's priority ✅
      c. Handle edit todo text functionality ✅

    3. Week 4
      b. Search for todo functionality 
      c. Convert the whole project to use React Hooks 🪝
*/

function App() {
  return (
    <main className='App main-layout'>
      <section className='side-navbar-section'>
        <LogoComponent />
        <nav className='flex-column'>
          <Link to='/'>Home</Link>
          <Link to='/todos'>Todos</Link>
        </nav>
      </section>

      {/* routes */}
      <Routes>
        <Route path='/todos' caseSensitive={false} element={<TodoListPage />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundComponent />} />
      </Routes>
    </main>
  );
}

const NotFoundComponent = () => {
  return <h1>404 Not Found</h1>;
};

export default App;
