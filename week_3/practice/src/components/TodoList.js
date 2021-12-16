import React, { Component } from 'react';
import Priority from '../constants/priority';
import '../styles/todo.css';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
  render() {
    return (
      <section className='todo-section-container'>
        <div className='todo-lists-container'>
          {Object.entries(Priority).map(([key, _value]) => (
            <ul className='todo-list-container' key={key}>
              <h4>{key}</h4>
              {this.props.todos
                .filter((t) => t.priority === key)
                .map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={this.props.toggleTodo}
                    handleDeleteTodo={this.props.handleDeleteTodo}
                    handleChangePriority={this.props.handleChangePriority}
                    handleChangeTodoTitle={this.props.handleChangeTodoTitle}
                  />
                ))}
            </ul>
          ))}
        </div>
      </section>
    );
  }
}
