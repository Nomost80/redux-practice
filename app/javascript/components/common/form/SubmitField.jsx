import React from 'react';
import PropTypes from 'prop-types';

const SubmitField = ({ label, disabled }) => (
  <div className="ui buttons">
    <button className="ui positive button" type="submit" disabled={disabled}>{label}</button>
  </div>
);

SubmitField.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SubmitField;
