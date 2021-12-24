import React from 'react';
import Priority from '../constants/priority';
import '../styles/todo.css';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  toggleTodo,
  handleDeleteTodo,
  handleChangePriority,
  handleChangeTodoTitle,
}) => {
  return (
    <section className='todo-section-container'>
      <div className='todo-lists-container'>
        {Object.entries(Priority).map(([key, _value]) => (
          <ul className='todo-list-container' key={key}>
            <h4>{key}</h4>
            {todos
              .filter((t) => t.priority === key)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  handleDeleteTodo={handleDeleteTodo}
                  handleChangePriority={handleChangePriority}
                  handleChangeTodoTitle={handleChangeTodoTitle}
                />
              ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default TodoList;
