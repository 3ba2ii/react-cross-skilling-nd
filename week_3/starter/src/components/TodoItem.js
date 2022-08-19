import React, { useRef, useState } from 'react';
import { FiEdit, FiX } from 'react-icons/fi';
import '../styles/todo.css';
import PriorityComponent from './PriorityComponent';

const TodoItem = ({ todo, handleDeleteTodo, toggleTodo, editTodoTitle }) => {
  const [editMode, setEditMode] = useState(false);
  const { id, text, completed, priority } = todo;

  const titleRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titleRef.current.value);
    editTodoTitle(id, titleRef.current.value);
    setEditMode(false);
  };
  console.log('rerendered');
  return (
    <li className='todo-item-container'>
      <header>
        <div className='header-text-container'>
          {!completed ? (
            <span className='todo-icon'>
              <PriorityComponent priority={priority} />
            </span>
          ) : (
            <span className='todo-icon'>✅</span>
          )}
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <input ref={titleRef} type='text' defaultValue={text} />
            </form>
          ) : (
            <h2
              className='todo-text'
              style={{
                textDecoration: completed ? 'line-through' : 'none',
                opacity: completed ? 0.5 : 1,
              }}
              onClick={() => {
                toggleTodo(id);
              }}
            >
              {text}
            </h2>
          )}
        </div>
        <button className='btn remove-btn' onClick={() => handleDeleteTodo(id)}>
          <FiX />
        </button>
        <button className='btn' onClick={() => setEditMode(!editMode)}>
          <FiEdit />
        </button>
      </header>
    </li>
  );
};
export default TodoItem;
