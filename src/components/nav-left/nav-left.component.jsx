import { useState } from 'react';
import SHOP_DATA from '../featured-category/shop.data';

const NavLeft = ({ name }) => {
  const [state] = useState({ products: SHOP_DATA });
  const { products } = state;
  return (
    <div>
      <div id='nav-left' className='nav-left hidden'>
        <div className='cursor'>
          <h5>{name}</h5>
        </div>
        <div>
          <ul className='products smooth_s'>
            {products.map((product) => (
              <li>
                <a href='/index.html#onSale'>{product.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavLeft;
