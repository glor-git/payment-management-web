import React from 'react';
import styles from './PaymentRegistration.module.scss';
import TitleBox from "../TitleBox";
import Button from "../Button";
import CardRegister from "./CardRegister";
import { useNavigate } from 'react-router-dom';
import { cardListData } from "../../static/database";

export default function PaymentRegistration() {
  const navigate = useNavigate();

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

  function findCard() {
    const { cardNumber, cardDate, cardPassword } = getUserCardData();
    let isCard = false;
    let card = {}

    cardListData.forEach(cardData => {
      if (cardData.cardNumber === cardNumber && cardData.cardDate === cardDate && cardData.cardPassword === cardPassword) {
        isCard = true;
        card = {
          cardId: cardData.cardId,
          cardImage: cardData.cardImage,
          cardName: cardData.cardName,
          cardNumber: cardData.cardNumber,
          cardDate: cardData.cardDate,
          cardPassword: cardData.cardPassword
        }
        return true
      }
    })

    return { isCard, card }
  }

  function setData() {
    if (findCard().isCard) {
      if (localStorage.getItem('cardData')) localStorage.setItem('cardData', JSON.stringify([...JSON.parse(localStorage.getItem('cardData')), findCard().card]));
      else localStorage.setItem('cardData', JSON.stringify([findCard().card]));
      alert('등록되었습니다.');
      navigate('/complete');
    } else {
      alert('카드 정보를 찾을 수 없습니다.');
    }
  }
  // console.log(JSON.parse(localStorage.getItem('cardData')));
  return (
    <div className={styles.paymentRegistrationWrapper}>
      <TitleBox titleText={'결제 수단 등록'} />
      <CardRegister />
      <Button buttonText={'등록'} clickEvent={setData} />
    </div>
  );
}