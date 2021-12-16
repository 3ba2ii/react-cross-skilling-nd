import React from 'react';
import { FiEdit2, FiX } from 'react-icons/fi';
import Priority from '../constants/priority';
import '../styles/todo.css';
import PriorityComponent from './PriorityComponent';
import SelectComponent from './SelectComponent';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      todoText: '',
    };
  }
  onChangePriority = (e) => {
    const { id } = this.props.todo;

    this.props.handleChangePriority(id, e.target.value);
  };
  onChangeTodoTitle = (e) => {
    this.setState({
      ...this.state,
      newTodoText: e.target.value,
    });
  };
  toggleMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      editMode: !prevState.editMode,
    }));
  };
  handleSubmitEdit = (e) => {
    e.preventDefault();
    this.props.handleChangeTodoTitle(
      this.props.todo.id,
      this.state.newTodoText
    );
    this.toggleMode();
  };

  render() {
    const { editMode } = this.state;
    const { id, text, completed, priority } = this.props.todo;
    return (
      <li className='todo-item-container'>
        <header>
          <div className='header-text-container'>
            {!completed ? (
              <aside>
                <PriorityComponent priority={priority} />
              </aside>
            ) : (
              <span className='todo-icon'>✅</span>
            )}
            {editMode ? (
              <form onSubmit={this.handleSubmitEdit}>
                <input
                  defaultValue={text}
                  onChange={this.onChangeTodoTitle}
                  style={{ width: 'fit-content' }}
                />
              </form>
            ) : (
              <h2
                className='todo-text'
                style={{
                  textDecoration: completed ? 'line-through' : 'none',
                  opacity: completed ? 0.5 : 1,
                }}
                onClick={() => {
                  this.props.toggleTodo(id);
                }}
              >
                {text}
              </h2>
            )}
          </div>
          <button
            className='btn remove-btn'
            onClick={() => this.props.handleDeleteTodo(id)}
          >
            <FiX />
          </button>
        </header>
        <div className='flex-row'>
          <SelectComponent
            {...{
              label: 'Priority',
              handleChange: this.onChangePriority,
              value: priority,
              defaultValue: priority,
              options: Object.entries(Priority).map(([key, value]) => ({
                key,
                value,
              })),
            }}
          />
          <button className='btn' onClick={this.toggleMode}>
            <FiEdit2 />
          </button>
        </div>
      </li>
    );
  }
}
