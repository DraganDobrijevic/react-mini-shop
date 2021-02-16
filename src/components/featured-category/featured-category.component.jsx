import { useState } from 'react';

import OnSale from '../on-sale/on-sale.component';
import SHOP_DATA from './shop.data.js';

import './featured-category.styles.scss';

import photofc1 from '../../assets/img/t-shirt.jpg';
import photofc2 from '../../assets/img/watch.jpg';
import photofc3 from '../../assets/img/shoes.jpg';

const FeaturedCategory = () => {
  const [state] = useState({ collections: SHOP_DATA });
  const { collections } = state;
  return (
    <div className='featured-categories'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={photofc1} alt='' />
          </div>
          <div className='col-md-4'>
            <img src={photofc2} alt='' />
          </div>
          <div className='col-md-4'>
            <img src={photofc3} alt='' />
          </div>
        </div>
      </div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <OnSale key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default FeaturedCategory;
