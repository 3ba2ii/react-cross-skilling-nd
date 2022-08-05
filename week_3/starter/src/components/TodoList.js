import React, { Component } from 'react';
import '../styles/todo.css';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
  render() {
    return (
      <section className='todo-section-container'>
        <ul className='flex-column'>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={this.props.toggleTodo}
              handleDeleteTodo={this.props.handleDeleteTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
}
