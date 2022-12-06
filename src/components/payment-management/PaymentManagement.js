import React from 'react';
import './PaymentManagement.scss';
import TitleBox from "../TitleBox";
import CardList from "./CardList";
import Button from "../Button";

export default function PaymentManagement() {
  return (
    <div className={'payment-management-wrapper'}>
      <TitleBox titleText={'결제 수단 관리'} />
      <CardList />
      <Button buttonText={'+ 결제수단 등록'} />
    </div>
  );
}