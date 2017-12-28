import React from 'react';
import PropTypes from 'prop-types';

const DateField = ({
  name, label, placeholder, onChange, value,
}) => (
  <div className="field">
    <label htmlFor={name}>{label}</label>
    <input type="date" name={name} placeholder={placeholder} onChange={onChange} value={value} />
  </div>
);

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default DateField;
