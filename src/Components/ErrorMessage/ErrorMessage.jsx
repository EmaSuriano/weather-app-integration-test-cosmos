import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => <p>Something happened : {error}</p>;

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
