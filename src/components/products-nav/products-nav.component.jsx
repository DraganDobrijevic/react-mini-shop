import React from 'react';
import './products-nav.styles.scss';

const ProductsNav = ({ name }) => {
  return (
    <div id='productsX'>
      <div className='nav-item'>{name}</div>
      <div className='productsX nav-links'>
        <ul className='smooth_s'>
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
  );
};

export default ProductsNav;
