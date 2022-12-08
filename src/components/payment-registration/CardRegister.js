import React from 'react';
import styles from './CardRegister.module.scss';
import Input from "../Input";

export default function CardRegister() {

  return (
    <div className={styles.cardRegisterWrapper}>
      <ul className={styles.cardNumberWrapper}>
        <li className={styles.title}>카드번호</li>
        <li className={styles.content}>
          <Input name={'cardNumber'} maxLength={4} isKeypad={false} />
          <Input name={'cardNumber'} maxLength={4} isKeypad={false} />
          <Input name={'cardNumber'} maxLength={4} isKeypad={true} />
          <Input name={'cardNumber'} maxLength={4} isKeypad={true} />
        </li>
      </ul>
      <ul className={styles.cardDateWrapper}>
        <li className={styles.title}>유효기간</li>
        <li className={styles.content}>
          <Input name={'cardDate'} maxLength={2} isKeypad={true} placeholder={'MM'} />
          <Input name={'cardDate'} maxLength={2} isKeypad={true} placeholder={'YY'} />
        </li>
      </ul>
      <ul className={styles.cardPasswordWrapper}>
        <li className={styles.title}>비밀번호</li>
        <li className={styles.content}>
          <Input name={'cardPassword'} maxLength={2} isKeypad={true} placeholder={'카드 비밀번호 앞 두자리'} />
        </li>
      </ul>
    </div>
  );
}