import React from 'react';
import styles from './PaymentManagement.module.scss';
import TitleBox from "../TitleBox";
import CardList from "./CardList";
import Button from "../Button";
import { useNavigate } from 'react-router-dom';

export default function PaymentManagement() {
  const navigate = useNavigate();

  function push() {
    navigate('/registration');
  }

  return (
    <div className={styles.paymentManagementWrapper}>
      <TitleBox titleText={'결제 수단 관리'} />
      <CardList />
      <Button clickEvent={push} buttonText={'+ 결제수단 등록'} />
    </div>
  );
}