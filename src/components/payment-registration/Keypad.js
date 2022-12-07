import React, { useEffect, useState } from 'react';
import styles from './Keypad.module.scss';
import { shuffle } from "../../util/array";

export default function Keypad() {
  const [padArr, setPadArr] = useState([]);

  useEffect(() => {
    setPadArr(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, null]));
  }, [])

  return (
    <div className={styles.keypadWrapper}>
      {padArr.map(number => {
        return (
          <div className={styles.key}>{number}</div>
        )
      })}
      <div className={styles.key}>x</div>
    </div>
  );
}