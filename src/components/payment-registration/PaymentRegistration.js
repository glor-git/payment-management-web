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
    let isReduplication = false;
    let isCard = false;
    let card = {}

    // 중복된 카드 등록
    if (JSON.parse(localStorage.getItem('cardData'))) {
      JSON.parse(localStorage.getItem('cardData')).forEach(cardData => {
        if (cardData.cardNumber === cardNumber && cardData.cardDate === cardDate && cardData.cardPassword === cardPassword) isReduplication = true;
        return true;
      })

      if (isReduplication) {
        alert('이미 등록된 카드입니다.');
        return false;
      }
    }

    cardListData.forEach(cardData => {
      if (cardData.cardNumber === cardNumber && cardData.cardDate === cardDate && cardData.cardPassword === cardPassword) {
        card = {
          cardId: cardData.cardId,
          cardName: cardData.cardName,
          cardNumber: cardData.cardNumber,
          cardDate: cardData.cardDate,
          cardPassword: cardData.cardPassword
        }
        isCard = true;
        return false
      }
    })

    if (!isCard) {
      alert('카드 정보를 찾을 수 없습니다.');
      return false;
    }

    return card
  }

  function setData() {
    if (findCard()) {
      if (localStorage.getItem('cardData')) localStorage.setItem('cardData', JSON.stringify([...JSON.parse(localStorage.getItem('cardData')), findCard()]));
      else localStorage.setItem('cardData', JSON.stringify([findCard()]));
      localStorage.setItem('wjqrms', 'true');
      navigate('/complete');
    }
  }

  return (
    <div className={styles.paymentRegistrationWrapper}>
      <TitleBox titleText={'결제 수단 등록'} />
      <CardRegister />
      <Button buttonText={'등록'} clickEvent={setData} />
    </div>
  );
}