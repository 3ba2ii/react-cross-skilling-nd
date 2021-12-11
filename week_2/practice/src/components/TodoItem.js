import React from 'react';
import { FiX } from 'react-icons/fi';
import '../styles/todo.css';
import PriorityComponent from './PriorityComponent';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
    };
  }

  render() {
    const { id, text, completed, priority } = this.props.todo;
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
            <h2
              className='todo-text'
              style={{
                textDecoration: completed ? 'line-through' : 'none',
                opacity: completed ? 0.5 : 1,
              }}
              onClick={() => {
                this.props.toggleTodo(id);
              }}
            >
              {text}
            </h2>
          </div>
          <button
            className='btn remove-btn'
            onClick={() => this.props.handleDeleteTodo(id)}
          >
            <FiX />
          </button>
        </header>
      </li>
    );
  }
}
