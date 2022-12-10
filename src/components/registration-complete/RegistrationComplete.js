import React from 'react';
import styles from './RegistrationComplete.module.scss';
import { useNavigate } from 'react-router-dom';
import TitleBox from "../TitleBox";
import Button from "../Button";
import CompleteText from "./CompleteText";
import CompleteCard from "./CompleteCard";

export default function RegistrationComplete() {
  const navigate = useNavigate();

  function push(url) {
    navigate(url)
  }

  return (
    <div className={styles.registrationCompleteWrapper}>
      <TitleBox titleText={'결제 수단 등록 완료'} />
      <CompleteCard push={push}/>
      <CompleteText title={'등록완료!'} subTitle={<>와우! 결제를 위한 준비가 모두 끝났습니다.<br/>쉽고 빠른 스마일페이를 바로 사용해 보세요.</>}/>
      <Button clickEvent={() => push('/management')} buttonText={'확인'} />
    </div>
  );
}