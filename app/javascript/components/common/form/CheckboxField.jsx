import React from 'react';
import PropTypes from 'prop-types';

const CheckboxField = ({
  name, label, onChange, value,
}) => (
  <div className="field">
    <div className="ui checkbox">
      <input
        tabIndex="0"
        className="hidden"
        type="checkbox"
        name={name}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  </div>
);

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

export default CheckboxField;
