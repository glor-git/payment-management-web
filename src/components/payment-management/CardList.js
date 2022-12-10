import React, { useState } from 'react';
import styles from './CardList.module.scss';
import Card from "./Card";

export default function CardList() {
  const [cardList, setCardList] = useState(JSON.parse(localStorage.getItem('cardData')) ? JSON.parse(localStorage.getItem('cardData')) : []);

  function deleteCard(index) {
    const newCardList = [...cardList];
    newCardList.splice(index, 1);
    setCardList(newCardList)
    localStorage.setItem('cardData', JSON.stringify(newCardList));
    alert('카드정보가 삭제 되었습니다.')
  }

  return (
    <div className={styles.cardListWrapper}>
      {cardList.map(({ cardId, cardName, cardNumber }, index) => {

        return (
          <React.Fragment key={cardId}>
            <Card deleteCard={() => deleteCard(index)} cardName={cardName} cardNumber={cardNumber} />
          </React.Fragment>
        )
      })}
    </div>
  );
}