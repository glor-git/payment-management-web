import React from 'react';
import styles from './CardList.module.scss';
import Card from "./Card";

export default function CardList() {

  const listData = [
    {
      id: '1',
      imageUrl: '',
      cardName: '신한카드',
      cardNumber: '1234 11231 112 12345'
    },
    {
      id: '2',
      imageUrl: '',
      cardName: '우리카드',
      cardNumber: '11231 112 12345 552'
    },
    {
      id: '3',
      imageUrl: '',
      cardName: '우리카드',
      cardNumber: '11231 112 12345 552'
    },
    {
      id: '4',
      imageUrl: '',
      cardName: '우리카드',
      cardNumber: '11231 112 12345 552'
    },
    {
      id: '5',
      imageUrl: '',
      cardName: '우리카드',
      cardNumber: '11231 112 12345 552'
    },
    {
      id: '6',
      imageUrl: '',
      cardName: '우리카드',
      cardNumber: '11231 112 12345 552'
    },
    {
      id: '7',
      imageUrl: '',
      cardName: '우리카드',
      cardNumber: '11231 112 12345 552'
    },
    {
      id: '8',
      imageUrl: '',
      cardName: '우리카드',
      cardNumber: '11231 112 12345 552'
    },
    {
      id: '9',
      imageUrl: '',
      cardName: '우리카드',
      cardNumber: '11231 112 12345 552'
    },
    {
      id: '10',
      imageUrl: '',
      cardName: '우리카드',
      cardNumber: '11231 112 12345 552'
    }
  ];

  return (
    <div className={styles.cardListWrapper}>
      {listData.map(({ id, imageUrl, cardName, cardNumber }) => {
        return (
          <React.Fragment key={id}>
            <Card imageUrl={imageUrl} cardName={cardName} cardNumber={cardNumber} />
          </React.Fragment>
        )
      })}
    </div>
  );
}