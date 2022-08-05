import React from 'react';
import Priority from '../constants/priority';
import SelectComponent from './SelectComponent';
import '../styles/add-todo-form.css';
class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      priority: Priority.LOW,
    };
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handlePriorityChange = (e) => {
    this.setState({
      priority: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.text, this.state.priority);
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='add-todo-form-container'>
        <input
          type='text'
          value={this.state.text}
          onChange={this.handleTextChange}
          placeholder='Finish project before deadline'
          required
        />
        {/* Select Tag */}
        <SelectComponent
          {...{
            label: 'Priority',
            handleChange: this.handlePriorityChange,
            value: this.state.priority,
            defaultValue: this.state.priority,
            options: Object.entries(Priority).map(([key, value]) => ({
              key,
              value,
            })),
          }}
        />
      </form>
    );
  }
}

export default AddTodoForm;
