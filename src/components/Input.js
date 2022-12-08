import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from './Input.module.scss';
import { checkNumber } from "../util/regex";
import Keypad from "./payment-registration/Keypad";

Input.propTypes = {
  name: PropTypes.string,
  maxLength: PropTypes.number,
  isKeypad: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
};

export default function Input({ name, maxLength, isKeypad, placeholder }) {
  const [isFocus, setIsFocus] = useState(false);
  const [number, setNumber] = useState('');

  function handleFocus(e) {
    if (e.type === 'focus') setIsFocus(true);
    else if (e.type === 'blur') setIsFocus(false);
  }

  function handleChange(e) {
    setNumber(checkNumber(e));
  }

  return (
    <>
      <input type={isKeypad ? 'password' : 'text'}
             name={name}
             maxLength={maxLength}
             onKeyDown={(e) => {if (isKeypad) e.preventDefault();}}
             onChange={handleChange}
             onFocus={handleFocus}
             onBlur={handleFocus}
             placeholder={placeholder}
             value={number}
      />
      {isKeypad && isFocus && <div className={styles.keypad} onMouseDown={(e) => e.preventDefault()}>
          <Keypad maxLength={maxLength} setNumber={setNumber}/>
      </div>}
    </>
  );
}