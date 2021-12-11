import React, { Component } from 'react';

export default class PriorityComponent extends Component {
  displayPriorityIcon = () => {
    const { priority } = this.props;
    if (priority === 'HIGH') {
      return <span className='todo-icon icon-high'>🔴</span>;
    } else if (priority === 'MEDIUM') {
      return <span className='todo-icon icon-medium'>🟠</span>;
    } else if (priority === 'LOW') {
      return <span className='todo-icon icon-low'>🟡</span>;
    } else if (priority === 'URGENT') {
      return <span className='todo-icon icon-urgent'>❗️</span>;
    }
    return null;
  };

  render() {
    return this.displayPriorityIcon();
  }
}
