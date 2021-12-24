import React, { useState } from 'react';
import Priority from '../constants/priority';
import '../styles/add-todo-form.css';
import SelectComponent from './SelectComponent';
const AddTodoForm = ({ handleAddTodo }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState(Priority.LOW);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(text, priority);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='add-todo-form-container'>
      <input
        type='text'
        value={text}
        onChange={handleTextChange}
        placeholder='Finish project before 27 DEC'
        required
      />
      {/* Select Tag */}
      <SelectComponent
        {...{
          label: 'Priority',
          handleChange: handlePriorityChange,
          value: priority,
          defaultValue: priority,
          options: Object.entries(Priority).map(([key, value]) => ({
            key,
            value,
          })),
        }}
      />
    </form>
  );
};

export default AddTodoForm;
