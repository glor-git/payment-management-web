import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompleteText.module.scss';

CompleteText.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.element
};

export default function CompleteText({ title, subTitle }) {
  return (
    <div className={styles.completeTextWrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
    </div>
  );
}