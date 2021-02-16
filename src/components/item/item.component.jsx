import './item.styles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { FaEye } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const Item = ({ item, addItem, photo }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='col-md-3'>
      <div className='product-top'>
        <img src={imageUrl} alt='' />
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
            onClick={() => addItem(item)}
          >
            <FaShoppingCart className='fas' />
          </button>
        </div>
      </div>
      <div className='product-bottom text-center'>
        <h3>{name}</h3>
        <h5>${price}</h5>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Item);
