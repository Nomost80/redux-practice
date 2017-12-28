import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  name, label, placeholder, onChange, value,
}) => (
  <div className="field">
    <label htmlFor={name}>{label}</label>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </div>
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default TextField;
