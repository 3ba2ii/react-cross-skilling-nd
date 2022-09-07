import React from 'react';

class TodoItem extends React.Component {
  render() {
    const {id, text, completed, priority} = this.props.todo;
    return (
      <li className='todo-item-container'>
        <span style={{textDecoration: completed?"line-through":"none",}}>
          <div style={{
            width: 13,
            height: 13,
            borderRadius: 10,
            display: "inline-block",
            marginRight: 10,
            background: (priority === "LOW" ? "yellow" : (priority === "MEDIUM" ? "orange" : "red"))
          }}>
          </div>
          {text}
        </span>
      </li>
    );
  }
}

export default TodoItem;
