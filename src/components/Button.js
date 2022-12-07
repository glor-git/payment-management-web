import React from 'react';
import PropTypes from "prop-types";
import styles from './Button.module.scss';

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default function Button({ buttonText }) {
  return (
    <div className={styles.buttonWrapper}>{buttonText}</div>
  );
}