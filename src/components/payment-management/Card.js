import React from 'react';
import PropTypes from "prop-types";
import styles from './Card.module.scss';

Card.propTypes = {
  imageUrl: PropTypes.string,
  cardName: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired
};

export default function Card({ imageUrl, cardName, cardNumber }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper} />
      <ul className={styles.cardInfoWrapper}>
        <li>{cardName}</li>
        <li>{cardNumber}</li>
      </ul>
      <div className={styles.deleteIconWrapper}>삭제</div>
    </div>
  );
}