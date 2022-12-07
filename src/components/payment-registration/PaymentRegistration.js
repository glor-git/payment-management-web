import React from 'react';
import './PaymentRegistration.scss';
import TitleBox from "../TitleBox";
import Button from "../Button";
import CardRegister from "./CardRegister";
import Keypad from "./Keypad";

function PaymentRegistration() {
  return (
    <div className={'payment-registration-wrapper'}>
      <TitleBox titleText={'결제 수단 등록'} />
      <CardRegister />
      <Keypad />
      <Button buttonText={'등록'} />
    </div>
  );
}

export default PaymentRegistration;