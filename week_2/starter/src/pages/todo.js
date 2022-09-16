import React from 'react';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import '../styles/todo-page.css';

const mockTodos = [
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

class TodoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isTodosLoaded: false,
    };
  }

  handleAddTodo = (text, priority) => {
    const newTodos = [
      ...this.state.todos,
      {id: new Date().toISOString(), text, priority, completed: false},
    ];
    this.setState({todos: newTodos});
  };

  toggleTodo = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos: newTodos});
  };
  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({todos: newTodos});
  };
  changePriority = (id, priority) => {
    const newTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.priority = priority;
      }
      return todo;
    });
    this.setState({todos: newTodos});
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({todos: mockTodos, isTodosLoaded: true});
    }, 2000);
  }

  render() {
    return (
      <section className='dashboard-page main-page'>
        {/* Search Form */}
        <header className='page-header-container'>
          <h1>Todo List 📌</h1>
        </header>
        {/* Add todo form */}
        <AddTodoForm handleAddTodo={this.handleAddTodo}/>
        {this.state.isTodosLoaded ? (
          <TodoList
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            toggleTodo={this.toggleTodo}
            changePriority={this.changePriority}
          />
        ) : (
          <h2>Loading..</h2>
        )}
      </section>
    );
  }
}

export default TodoPage;
