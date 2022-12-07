import React from 'react';
import './CardRegister.scss';

export default function CardRegister(props) {
  return (
    <div className={'card-register-wrapper'}>
      <ul className={'card-number-wrapper'}>
        <li className={'title'}>카드번호</li>
        <li className={'content'}>
          <input />
          <input />
          <input />
          <input />
        </li>
      </ul>
      <ul className={'card-date-wrapper'}>
        <li className={'title'}>유효기간</li>
        <li className={'content'}>
          <input />
          <input />
        </li>
      </ul>
      <ul className={'card-password-wrapper'}>
        <li className={'title'}>비밀번호</li>
        <li className={'content'}>
          <input />
        </li>
      </ul>
    </div>
  );
}