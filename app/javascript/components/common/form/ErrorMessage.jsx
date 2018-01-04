import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ errors }) => {
  if (errors.length > 0) {
    return (
      <div className="ui error message">
        <i className="close icon" />
        <div className="header">
          There were some errors with your submission
        </div>
        <ul className="list">
          {errors.map(error => <li>{error}</li>)}
        </ul>
      </div>
    );
  }
  return null;
};

ErrorMessage.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ErrorMessage;
