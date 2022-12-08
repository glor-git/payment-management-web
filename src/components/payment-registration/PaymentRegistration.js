import React from 'react';
import styles from './PaymentRegistration.module.scss';
import TitleBox from "../TitleBox";
import Button from "../Button";
import CardRegister from "./CardRegister";

function PaymentRegistration() {

  function getUserCardData() {
    const cardNumbers = document.getElementsByName('cardNumber');
    const cardDates = document.getElementsByName('cardDate');
    const cardPasswords = document.getElementsByName('cardPassword');
    let cardNumber = '', cardDate = '', cardPassword = '';
    cardNumbers.forEach(number => cardNumber = cardNumber + number.value)
    cardDates.forEach(number => cardDate = cardDate + number.value)
    cardPasswords.forEach(number => cardPassword = cardPassword + number.value)

    return { cardNumber, cardDate, cardPassword }
  }

  function setData() {
    const { cardNumber, cardDate, cardPassword } = getUserCardData();
  }


  return (
    <div className={styles.paymentRegistrationWrapper}>
      <TitleBox titleText={'결제 수단 등록'} />
      <CardRegister />
      <Button buttonText={'등록'} clickEvent={setData} />
    </div>
  );
}

export default PaymentRegistration;