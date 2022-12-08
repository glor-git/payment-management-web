import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import styles from './Keypad.module.scss';
import { shuffle } from "../../util/array";

Keypad.propTypes = {
  maxLength: PropTypes.number,
  setNumber: PropTypes.func.isRequired
};

export default function Keypad({ maxLength, setNumber }) {
  const [padArr, setPadArr] = useState([]);

  function handleSetNumber(number) {
    if (number === 'x') setNumber(prev => prev.slice(0, -1));
    else setNumber(prev => (prev + number).length <= maxLength ? prev + number : prev)
  }

  useEffect(() => {
    setPadArr(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, null]));
  }, [])

  return (
    <div className={styles.keypadWrapper}>
      {padArr.map(number => {
        return (
          <button className={styles.key} key={number} onClick={() => handleSetNumber(number)}>
            {number === null ? <>&nbsp;</> : number}
          </button>
        )
      })}
      <button className={styles.key} onClick={() => handleSetNumber('x')}>x</button>
    </div>
  );
}