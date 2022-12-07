import React from 'react';
import styles from './CardRegister.module.scss';

export default function CardRegister(props) {
  return (
    <div className={styles.cardRegisterWrapper}>
      <ul className={styles.cardNumberWrapper}>
        <li className={styles.title}>카드번호</li>
        <li className={styles.content}>
          <input />
          <input />
          <input />
          <input />
        </li>
      </ul>
      <ul className={styles.cardDateWrapper}>
        <li className={styles.title}>유효기간</li>
        <li className={styles.content}>
          <input />
          <input />
        </li>
      </ul>
      <ul className={styles.cardPasswordWrapper}>
        <li className={styles.title}>비밀번호</li>
        <li className={styles.content}>
          <input />
        </li>
      </ul>
    </div>
  );
}