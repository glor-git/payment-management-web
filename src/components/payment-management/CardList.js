import React from 'react';
import './CardList.scss';
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
    }
  ];

  return (
    <div className={'card-list-wrapper'}>
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