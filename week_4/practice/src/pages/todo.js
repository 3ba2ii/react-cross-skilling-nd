import React, { useEffect, useState } from 'react';
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

  const handleChangePriority = (id, priority) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.priority = priority;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleChangeTodoTitle = (id, title) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = title;
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
      handleAddTodo('Hello from Udacity', Priority.LOW);
    }, 1000);
  };

  useEffect(() => {
    addMockData();
  }, []);

  return (
    <section className='dashboard-page main-page'>
      <header className='page-header-container'>
        <h1>Todo List 📌</h1>
      </header>

      <AddTodoForm handleAddTodo={handleAddTodo} />

      <TodoList
        {...{
          todos,
          toggleTodo,
          handleDeleteTodo,
          handleAddTodo,
          handleChangePriority,
          handleChangeTodoTitle,
        }}
      />
    </section>
  );
};

export default TodoPage;
