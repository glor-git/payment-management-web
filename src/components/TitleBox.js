import React from 'react';
import './TitleBox.scss';

export default function TitleBox({ titleText }) {
  return (
    <div className={'title-box'}>{titleText}</div>
  );
}