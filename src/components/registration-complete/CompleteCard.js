import React, { useEffect, useState } from 'react';
import styles from './CompleteCard.module.scss';
import { useNavigate } from 'react-router-dom';

export default function CompleteCard() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('wjqrms') !== 'true') navigate('/');
    else setData(JSON.parse(localStorage.getItem('cardData')).pop());

    return (() => {
      localStorage.removeItem('wjqrms');
    })

  }, [navigate])

  return (
    <div className={styles.completeCard}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardName}>{data.cardName}</div>
      </div>
        <ul className={styles.cardInfoWrapper}>
          <li>{data.cardName}</li>
          <li>{data.cardNumber && `${data.cardNumber.substr(0,4)} ${data.cardNumber.substr(4, 2)}** **** ${data.cardNumber.substr(12, 3)}*`}</li>
        </ul>
    </div>
  );
}