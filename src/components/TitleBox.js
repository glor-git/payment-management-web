import React from 'react';
import PropTypes from "prop-types";
import styles from './TitleBox.module.scss';

TitleBox.propTypes = {
  titleText: PropTypes.string.isRequired,
};

export default function TitleBox({ titleText }) {
  return (
    <div className={styles.titleBox}>{titleText}</div>
  );
}