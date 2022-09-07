import './styles/layout.css';
import './App.css';
import {LogoComponent} from "./components/LogoComponent";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main className='App main-layout'>
      <section className='side-navbar-section'>
        <LogoComponent/>
      </section>
      <TodoList/>
    </main>
  );
}

export default App;