import React from 'react';
import PropTypes from 'prop-types';
import './CompleteText.scss';

CompleteText.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.element
};

function CompleteText({ title, subTitle }) {
  return (
    <div className={'complete-text-wrapper'}>
      <div className={'title'}>{title}</div>
      <div className={'sub-title'}> {subTitle}</div>
    </div>
  );
}

export default CompleteText;