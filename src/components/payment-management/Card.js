import React from 'react';
import PropTypes from "prop-types";
import styles from './Card.module.scss';

Card.propTypes = {
  deleteCard: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired
};

export default function Card({ deleteCard, cardName, cardNumber }) {


  return (
    <div className={styles.cardWrapper}>
      <ul className={styles.cardInfoWrapper}>
        <li>{cardName}</li>
        <li>{`${cardNumber.substr(0,4)} ${cardNumber.substr(4, 2)}** **** ${cardNumber.substr(12, 3)}*`}</li>
      </ul>
      <div className={styles.deleteIconWrapper} onClick={deleteCard}>삭제</div>
    </div>
  );
}