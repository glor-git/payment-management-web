import React from 'react';
import PropTypes from "prop-types";
import './TitleBox.scss';

TitleBox.propTypes = {
  titleText: PropTypes.string.isRequired,
};

export default function TitleBox({ titleText }) {
  return (
    <div className={'title-box'}>{titleText}</div>
  );
}