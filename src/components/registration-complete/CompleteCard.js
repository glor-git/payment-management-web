import React from 'react';
import './CompleteCard.scss';

export default  function CompleteCard() {
  const data = {
    id: '1',
    imageUrl: '',
    cardName: '신한카드',
    cardNumber: '1234 11231 112 12345',
    cardType: '신한체크카드'
  }
  return (
    <div className={'complete-card'}>
      <div className={'card-wrapper2'}>
        <div className={'image-wrapper'} />
        <div className={'card-name'}>신한카드</div>
      </div>

        <ul className={'card-info-wrapper'}>
          <li>{data.cardType}</li>
          <li>{data.cardNumber}</li>
        </ul>
    </div>
  );
}