import React from 'react';

const PriorityComponent = ({ priority }) => {
  const displayPriorityIcon = () => {
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
  return displayPriorityIcon();
};

export default PriorityComponent;
