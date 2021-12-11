import React, { Component } from 'react';
import '../styles/select-component.css';
export default class SelectComponent extends Component {
  render() {
    const { label, handleChange, value, defaultValue, options } = this.props;
    return (
      <div className='select-component-container'>
        <label htmlFor={label}>{label}:</label>
        <select
          name={label}
          id={label}
          onChange={handleChange}
          value={value}
          defaultValue={defaultValue}
        >
          {options.map(({ key, value: val }) => (
            <option key={key} value={key}>
              {val}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
