import React from 'react';
export default class AddTodoForm extends React.Component {
  state = {
    text: '',
    priority: 'LOW',
  };
  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.text, this.state.priority);
    this.setState({ text: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <input
          type='text'
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        {/* Select Priority Component */}
      </form>
    );
  }
}
