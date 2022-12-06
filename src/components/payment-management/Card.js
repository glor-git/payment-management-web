import React from 'react';
import PropTypes from "prop-types";
import './Card.scss';

Card.propTypes = {
  imageUrl: PropTypes.string,
  cardName: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired
};

export default function Card({ imageUrl, cardName, cardNumber }) {
  return (
    <div className={'card-wrapper'}>
      <div className={'image-wrapper'} />
      <ul className={'card-info-wrapper'}>
        <li>{cardName}</li>
        <li>{cardNumber}</li>
      </ul>
      <div className={'delete-icon-wrapper'}>삭제</div>
    </div>
  );
}