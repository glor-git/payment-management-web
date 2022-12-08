import React from 'react';
import PropTypes from "prop-types";
import styles from './Button.module.scss';

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  clickEvent: PropTypes.func
};

export default function Button({ buttonText, clickEvent }) {
  return (
    <div className={styles.buttonWrapper} onClick={clickEvent}>{buttonText}</div>
  );
}