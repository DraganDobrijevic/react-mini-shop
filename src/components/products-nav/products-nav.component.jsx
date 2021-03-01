import { useState } from 'react';
import './products-nav.styles.scss';
import SHOP_DATA from '../featured-category/shop.data';

const ProductsNav = ({ name }) => {
  const [state] = useState({ products: SHOP_DATA });
  const { products } = state;
  return (
    <div id='productsX'>
      <div className='nav-item'>{name}</div>
      <div className='productsX nav-links'>
        <ul className='smooth_s'>
          {products.map((product) => (
            <li key={product.id}>
              <a href='/index.html#onSale'>{product.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsNav;
