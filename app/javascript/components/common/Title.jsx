import React from 'react';
import PropTypes from 'prop-types';

const title = ({ content }) => (
  <h3 className="ui dividing header">
    {content}
  </h3>
);

title.propTypes = {
  content: PropTypes.string.isRequired,
};

export default title;
