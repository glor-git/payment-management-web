import React from 'react';
import PropTypes from "prop-types";
import './Button.scss';

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

function Button({ buttonText }) {
  return (
    <div className={'button-wrapper'}>{buttonText}</div>
  );
}

export default Button;