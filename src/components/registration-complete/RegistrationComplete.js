import React from 'react';
import './RegistrationComplete.scss';
import TitleBox from "../TitleBox";
import Button from "../Button";
import CompleteText from "./CompleteText";
import CompleteCard from "./CompleteCard";

export default function RegistrationComplete() {
  return (
    <div className={'registration-complete-wrapper'}>
      <TitleBox titleText={'결제 수단 등록 완료'} />
      <CompleteCard />
      <CompleteText title={'등록완료!'} subTitle={<>와우! 결제를 위한 준비가 모두 끝났습니다.<br/>쉽고 빠른 스마일페이를 바로 사용해 보세요.</>}/>
      <Button buttonText={'확인'} />
    </div>
  );
}