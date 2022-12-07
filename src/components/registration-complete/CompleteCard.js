import React from 'react';
import styles from './CompleteCard.module.scss';

export default function CompleteCard() {
  const data = {
    id: '1',
    imageUrl: '',
    cardName: '신한카드',
    cardNumber: '1234 11231 112 12345',
    cardType: '신한체크카드'
  }
  return (
    <div className={styles.completeCard}>
      <div className={styles.cardWrapper}>
        <div className={styles.imageWrapper} />
        <div className={styles.cardName}>신한카드</div>
      </div>

        <ul className={styles.cardInfoWrapper}>
          <li>{data.cardType}</li>
          <li>{data.cardNumber}</li>
        </ul>
    </div>
  );
}