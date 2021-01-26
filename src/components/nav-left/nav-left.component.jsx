import React from 'react';

const NavLeft = ({ name }) => {
  return (
    <div>
      <div id='nav-left' className='nav-left hidden'>
        <div className='cursor'>
          <h5>{name}</h5>
        </div>
        <div>
          <ul className='products smooth_s'>
            <li>
              <a href='/index.html#onSale'>On Sale</a>
            </li>
            <li>
              <a href='/index.html#newArrivals'>New Arrivals</a>
            </li>
            <li>
              <a href='/index.html#watches'>Watches</a>
            </li>
            <li>
              <a href='/index.html#rings'>Rings</a>
            </li>
            <li>
              <a href='/index.html#suits'>Suits</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavLeft;
