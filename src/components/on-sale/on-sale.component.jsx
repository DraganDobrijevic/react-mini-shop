import Item from '../item/item.component';

import './on-sale.styles.scss';

import photoos1 from '../../assets/img/product-1.1.jpg';
import photoos2 from '../../assets/img/product-2.jpg';
import photoos3 from '../../assets/img/product-3.jpg';
import photoos4 from '../../assets/img/product-4.jpg';

const OnSale = () => {
  return (
    <div id='onSale' className='on-sale'>
      <div className='container'>
        <div className='title-box'>
          <h2>On Sale</h2>
        </div>
        <div className='row'>
          <Item photo={photoos1} />
          <Item photo={photoos2} />
          <Item photo={photoos3} />
          <Item photo={photoos4} />
        </div>
      </div>
    </div>
  );
};

export default OnSale;
