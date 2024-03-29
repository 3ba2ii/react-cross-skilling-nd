import { useEffect, useState } from 'react';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import Priority from '../constants/priority';
import '../styles/todo-page.css';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text, priority) => {
    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        text,
        priority,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const addMockData = () => {
    setTimeout(() => {
      handleAddTodo('Hello from react', Priority.LOW);
    }, 1000);
  };

  const editTodoTitle = (id, newTitle) => {
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        t.text = newTitle;
      }
      return t;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    addMockData();
  }, []);

  return (
    <section className='dashboard-page main-page'>
      <header className='page-header-container'>
        <h1>Todo List 📌</h1>
      </header>
      <button>Show completed todos</button>

      <AddTodoForm handleAddTodo={handleAddTodo} />

      <TodoList
        {...{
          todos,
          toggleTodo,
          handleDeleteTodo,
          handleAddTodo,
          editTodoTitle,
        }}
      />
    </section>
  );
};

export default TodoPage;
