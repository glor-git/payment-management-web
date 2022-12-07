import React from 'react';
import styles from './PaymentManagement.module.scss';
import TitleBox from "../TitleBox";
import CardList from "./CardList";
import Button from "../Button";

export default function PaymentManagement() {
  return (
    <div className={styles.paymentManagementWrapper}>
      <TitleBox titleText={'결제 수단 관리'} />
      <CardList />
      <Button buttonText={'+ 결제수단 등록'} />
    </div>
  );
}