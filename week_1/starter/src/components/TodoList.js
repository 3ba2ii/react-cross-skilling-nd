import React, { Component } from 'react';
import TodoItem from './TodoItem';

//we will use a static todo list for now

class TodoList extends Component {
  todos = [
    {
      id: 1,
      text: 'Learn React',
      completed: false,
      priority: 'LOW',
    },
    {
      id: 2,
      text: 'Learn JS',
      completed: false,
      priority: 'MEDIUM',
    },
    {
      id: 3,
      text: 'Learn Anything',
      completed: true,
      priority: 'HIGH',
    },
  ];
  render() {
    return (
      <ol>
        {this.todos.map((item) => (
          <TodoItem
            todo={item}
            key={item.id}
          />
        ))}
      </ol>
    );
  }
}

export default TodoList;
