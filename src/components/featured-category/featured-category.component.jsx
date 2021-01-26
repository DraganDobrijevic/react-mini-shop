import OnSale from '../on-sale/on-sale.component';

import './featured-category.styles.scss';

import photofc1 from '../../assets/img/t-shirt.jpg';
import photofc2 from '../../assets/img/watch.jpg';
import photofc3 from '../../assets/img/shoes.jpg';

const FeaturedCategory = () => {
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
      <OnSale />
    </div>
  );
};

export default FeaturedCategory;
