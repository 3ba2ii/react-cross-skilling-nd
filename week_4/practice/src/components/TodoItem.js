import React, { useState } from 'react';
import { FiEdit2, FiX } from 'react-icons/fi';
import Priority from '../constants/priority';
import '../styles/todo.css';
import PriorityComponent from './PriorityComponent';
import SelectComponent from './SelectComponent';

const TodoItem = ({
  handleChangeTodoTitle,
  todo,
  handleChangePriority,
  toggleTodo,
  handleDeleteTodo,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [todoText, setTodoText] = useState('');

  const onChangePriority = (e) => {
    handleChangePriority(todo.id, e.target.value);
  };
  const onChangeTodoTitle = (e) => {
    setTodoText(e.target.target);
  };
  const toggleMode = () => {
    setEditMode(!editMode);
  };
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    handleChangeTodoTitle(todo.id, todoText);
    this.toggleMode();
  };

  const { id, text, completed, priority } = todo;

  return (
    <li className='todo-item-container'>
      <header>
        <div className='header-text-container'>
          {!completed ? (
            <aside>
              <PriorityComponent priority={priority} />
            </aside>
          ) : (
            <span className='todo-icon'>✅</span>
          )}
          {editMode ? (
            <form onSubmit={handleSubmitEdit}>
              <input
                defaultValue={text}
                onChange={onChangeTodoTitle}
                style={{ width: 'fit-content' }}
              />
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
      </header>
      <div className='flex-row'>
        <SelectComponent
          {...{
            label: 'Priority',
            handleChange: onChangePriority,
            value: priority,
            defaultValue: priority,
            options: Object.entries(Priority).map(([key, value]) => ({
              key,
              value,
            })),
          }}
        />
        <button className='btn' onClick={toggleMode}>
          <FiEdit2 />
        </button>
      </div>
    </li>
  );
};
export default TodoItem;
