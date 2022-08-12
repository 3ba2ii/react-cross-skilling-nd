import React from 'react';
import PriorityComponent from './PriorityComponent';
class TodoItem extends React.Component {
  render() {
    const { id, text, completed, priority } = this.props.todo;
    return (
      <li className='todo-item-container'>
        <header>
          <div className='header-text-container flex-row'>
            {!completed ? (
              <aside>{<PriorityComponent priority={priority} />}</aside>
            ) : (
              <span className='todo-icon'>✅</span>
            )}

            <h2
              className='todo-text'
              style={{
                textDecoration: completed ? 'line-through' : 'none',
                opacity: completed ? 0.5 : 1,
              }}
            >
              {text}
            </h2>
          </div>
        </header>
      </li>
    );
  }
}
export default TodoItem;
