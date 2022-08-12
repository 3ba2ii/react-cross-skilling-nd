import React, { Component } from 'react';
import TodoItem from './TodoItem';

//we will use a static todo list for now
const TodoListItems = [
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
class TodoList extends Component {
  render() {
    return (
      <section className='todo-section-container'>
        <div className='todo-lists-container'>
          <ul className='todo-list-container'>
            {TodoListItems.map((item) => (
              <TodoItem todo={item} key={item.id} />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default TodoList;
