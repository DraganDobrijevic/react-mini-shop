import React from 'react';
import './info-nav.styles.scss';

const InfoNav = ({ name, showPosition, text }) => {
  return (
    <div id={showPosition === 'middle' ? 'nav-item-middle' : 'nav-item-right'}>
      <div className='nav-item-name'>{name}</div>
      <div
        className={
          showPosition === 'middle'
            ? 'nav-item-text-middle'
            : 'nav-item-text-right'
        }
      >
        {text.map((text1, index) => (
          <p key={index}>{text1}</p>
        ))}
      </div>
    </div>
  );
};

export default InfoNav;
