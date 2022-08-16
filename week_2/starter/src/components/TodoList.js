import React, { Component } from 'react';
import TodoItem from './TodoItem';

//we will use a static todo list for now

class TodoList extends Component {
  render() {
    return (
      <section className='todo-section-container'>
        <div className='todo-lists-container'>
          <ul className='todo-list-container'>
            {this.props.todos.map((item) => (
              <TodoItem
                todo={item}
                key={item.id}
                toggleTodo={this.props.toggleTodo}
                deleteTodo={this.props.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default TodoList;
