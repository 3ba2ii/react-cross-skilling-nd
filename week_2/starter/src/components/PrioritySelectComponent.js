import React from 'react';

class PrioritySelectComponent extends React.Component {
  render() {
    const {id, priority} = this.props;
    return (
      <select defaultValue={priority} onChange={(event) => {
        this.props.changePriority(id, event.target.value);
      }}>
        <option value={'LOW'}>LOW</option>
        <option value={'MEDIUM'}>MEDIUM</option>
        <option value={'HIGH'}>HIGH</option>
        <option value={'URGENT'}>URGENT</option>
      </select>
    );
  }
}

export default PrioritySelectComponent;
