import React, { Component } from 'react';
import '../styles/todo.css';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
  render() {
    return (
      <section className='todo-section-container'>
        <button onClick={ this.props.handleCompleted }>Show Completed</button>
        <ul className='flex-column'>
          { this.props.isCompleted === true ?
            this.props.todos.filter((e) => (e.completed === true)).map((todo) => (
              <TodoItem
                key={ todo.id }
                todo={ todo }
                toggleTodo={ this.props.toggleTodo }
                handleDeleteTodo={ this.props.handleDeleteTodo }
              />)) :
            this.props.todos.map((todo) => (
              <TodoItem
                key={ todo.id }
                todo={ todo }
                toggleTodo={ this.props.toggleTodo }
                handleDeleteTodo={ this.props.handleDeleteTodo }
              />
            ))
          }
        </ul>
      </section>
    );
  }
}
