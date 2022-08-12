import React from 'react';
import TodoList from '../components/TodoList';
import '../styles/todo-page.css';

const TodoPage = () => {
  return (
    <section className='dashboard-page main-page'>
      <header className='page-header-container'>
        <h1>Todo List 📌</h1>
      </header>

      <TodoList />
    </section>
  );
};

export default TodoPage;
