import React, { Component } from 'react';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import Priority from '../constants/priority';
import '../styles/todo-page.css';

export default class TodoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  handleAddTodo = (text, priority) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Date.now().toString(),
          text,
          priority,
          completed: false,
        },
      ],
    });
  };
  toggleTodo = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: newTodos,
    });
  };

  handleChangePriority = (id, priority) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.priority = priority;
      }
      return todo;
    });
    this.setState({
      todos: newTodos,
    });
  };

  handleChangeTodoTitle = (id, title) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.text = title;
      }
      return todo;
    });
    this.setState({
      todos: newTodos,
    });
  };
  handleDeleteTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  };

  addMockData = () => {
    setTimeout(() => {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: Date.now().toString(),
            text: 'Hello from Udacity',
            completed: false,
            priority: Priority.LOW,
          },
        ],
      });
    }, 1000);
  };

  componentDidMount() {
    /* to simulate an API call */
    this.addMockData();
  }
  render() {
    return (
      <section className='dashboard-page main-page'>
        <header className='page-header-container'>
          <h1>Todo List 📌</h1>
        </header>

        <AddTodoForm handleAddTodo={this.handleAddTodo} />

        <TodoList
          {...{
            todos: this.state.todos,
            toggleTodo: this.toggleTodo,
            handleDeleteTodo: this.handleDeleteTodo,
            handleAddTodo: this.handleAddTodo,
            handleChangePriority: this.handleChangePriority,
            handleChangeTodoTitle: this.handleChangeTodoTitle,
          }}
        />
      </section>
    );
  }
}
