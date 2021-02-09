import './item.styles.scss';

import { FaEye } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const Item = ({ photo }) => {
  return (
    <div className='col-md-3'>
      <div className='product-top'>
        <a href='/product'>
          <img src={photo} alt='' />
          <div className='overlay-right'>
            <button
              type='button'
              className='btn btn-secondary'
              title='Quick Shop'
            >
              <FaEye className='fas' />
            </button>
            <button
              type='button'
              className='btn btn-secondary'
              title='Add to Cart'
            >
              <FaShoppingCart className='fas' />
            </button>
          </div>
        </a>
      </div>
      <div className='product-bottom text-center'>
        <h3>Xyz</h3>
        <h5>$777.90</h5>
      </div>
    </div>
  );
};

export default Item;
