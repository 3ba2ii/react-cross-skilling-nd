import React from 'react';
import '../styles/select-component.css';
const SelectComponent = ({
  label,
  handleChange,
  value,
  defaultValue,
  options,
}) => {
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
};
export default SelectComponent;
