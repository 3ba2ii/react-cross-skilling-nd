import React from 'react';
import Priority from "./Priority";

class TodoItem extends React.Component {
  render() {
    const {id, text, completed, priority} = this.props.todo;
    return (
      <li className='todo-item-container'>
        <span style={{textDecoration: completed?"line-through":"none",}}>
          <Priority priority={priority}/>
          {text}
        </span>
      </li>
    );
  }
}

export default TodoItem;
