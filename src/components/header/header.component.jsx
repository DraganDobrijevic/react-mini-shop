import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

import { FaShoppingBasket } from 'react-icons/fa';

import ProductsNav from '../products-nav/products-nav.component';
import InfoNav from '../info-nav/info-nav.component';

const Header = () => {
  const [infoNav, setInfoNav] = useState([
    {
      id: 1,
      name: 'About Us',
      showPosition: 'middle',
      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum sed leo id accumsan. Proin viverra luctus mi ut posuere. Nulla fringilla orci ac lorem ultrices finibus. Integer pellentesque imperdiet dolor, vitae vestibulum elit suscipit eu. Maecenas eleifend commodo bibendum. Mauris id justo interdum, pharetra nisi lobortis, maximus orci. Aenean pulvinar cursus quam ac accumsan. Proin vel urna quis nibh vehicula condimentum in sit amet eros. Nunc non molestie arcu, eu accumsan nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lobortis eget ligula quis gravida.',
        'raesent efficitur nunc et efficitur condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tincidunt velit at justo finibus tristique. Suspendisse convallis mi id lacus pretium consectetur. Vestibulum finibus odio arcu, tincidunt gravida felis dignissim eget. Quisque dolor orci, hendrerit eu ante nec, dapibus rutrum lacus. Morbi id lectus nisl.',
      ],
    },
    {
      id: 2,
      name: 'How To Order?',
      showPosition: 'middle',
      text: [
        'Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. In dictum sed leo id accumsan. Proin viverra luctus mi ut posuere. Nulla fringilla orci ac lorem ultrices finibus. Integer pellentesque imperdiet dolor, vitae vestibulum elit suscipit eu. Maecenas eleifend commodo bibendum. Mauris id justo interdum, pharetra nisi lobortis, maximus orci. Aenean pulvinar cursus quam ac accumsan. Proin vel urna quis nibh vehicula condimentum in sit amet eros. Nunc non molestie arcu, eu accumsan nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lobortis eget ligula quis gravida.',
        'raesent2 efficitur nunc et efficitur condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tincidunt velit at justo finibus tristique. Suspendisse convallis mi id lacus pretium consectetur. Vestibulum finibus odio arcu, tincidunt gravida felis dignissim eget. Quisque dolor orci, hendrerit eu ante nec, dapibus rutrum lacus. Morbi id lectus nisl.',
      ],
    },
    {
      id: 3,
      name: 'Payment Methods',
      showPosition: 'middle',
      text: [
        'Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. In dictum sed leo id accumsan. Proin viverra luctus mi ut posuere. Nulla fringilla orci ac lorem ultrices finibus. Integer pellentesque imperdiet dolor, vitae vestibulum elit suscipit eu. Maecenas eleifend commodo bibendum. Mauris id justo interdum, pharetra nisi lobortis, maximus orci. Aenean pulvinar cursus quam ac accumsan. Proin vel urna quis nibh vehicula condimentum in sit amet eros. Nunc non molestie arcu, eu accumsan nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lobortis eget ligula quis gravida.',
        'raesent3 efficitur nunc et efficitur condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tincidunt velit at justo finibus tristique. Suspendisse convallis mi id lacus pretium consectetur. Vestibulum finibus odio arcu, tincidunt gravida felis dignissim eget. Quisque dolor orci, hendrerit eu ante nec, dapibus rutrum lacus. Morbi id lectus nisl.',
      ],
    },
    {
      id: 4,
      name: 'Delivery',
      showPosition: 'middle',
      text: [
        'Lorem4 ipsum dolor sit amet, consectetur adipiscing elit. In dictum sed leo id accumsan. Proin viverra luctus mi ut posuere. Nulla fringilla orci ac lorem ultrices finibus. Integer pellentesque imperdiet dolor, vitae vestibulum elit suscipit eu. Maecenas eleifend commodo bibendum. Mauris id justo interdum, pharetra nisi lobortis, maximus orci. Aenean pulvinar cursus quam ac accumsan. Proin vel urna quis nibh vehicula condimentum in sit amet eros. Nunc non molestie arcu, eu accumsan nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lobortis eget ligula quis gravida.',
        'raesent4 efficitur nunc et efficitur condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tincidunt velit at justo finibus tristique. Suspendisse convallis mi id lacus pretium consectetur. Vestibulum finibus odio arcu, tincidunt gravida felis dignissim eget. Quisque dolor orci, hendrerit eu ante nec, dapibus rutrum lacus. Morbi id lectus nisl.',
      ],
    },
    {
      id: 5,
      name: 'Warranty',
      showPosition: 'middle',
      text: [
        'Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. In dictum sed leo id accumsan. Proin viverra luctus mi ut posuere. Nulla fringilla orci ac lorem ultrices finibus. Integer pellentesque imperdiet dolor, vitae vestibulum elit suscipit eu. Maecenas eleifend commodo bibendum. Mauris id justo interdum, pharetra nisi lobortis, maximus orci. Aenean pulvinar cursus quam ac accumsan. Proin vel urna quis nibh vehicula condimentum in sit amet eros. Nunc non molestie arcu, eu accumsan nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lobortis eget ligula quis gravida.',
        'raesent5 efficitur nunc et efficitur condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tincidunt velit at justo finibus tristique. Suspendisse convallis mi id lacus pretium consectetur. Vestibulum finibus odio arcu, tincidunt gravida felis dignissim eget. Quisque dolor orci, hendrerit eu ante nec, dapibus rutrum lacus. Morbi id lectus nisl.',
      ],
    },
    {
      id: 6,
      name: 'Contact Us',
      showPosition: 'right',
      text: [
        'Lorem6 ipsum dolor sit amet, consectetur adipiscing elit. In dictum sed leo id accumsan. Proin viverra luctus mi ut posuere. Nulla fringilla orci ac lorem ultrices finibus. Integer pellentesque imperdiet dolor, vitae vestibulum elit suscipit eu. Maecenas eleifend commodo bibendum. Mauris id justo interdum, pharetra nisi lobortis, maximus orci. Aenean pulvinar cursus quam ac accumsan. Proin vel urna quis nibh vehicula condimentum in sit amet eros. Nunc non molestie arcu, eu accumsan nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lobortis eget ligula quis gravida.',
        'raesent6 efficitur nunc et efficitur condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tincidunt velit at justo finibus tristique. Suspendisse convallis mi id lacus pretium consectetur. Vestibulum finibus odio arcu, tincidunt gravida felis dignissim eget. Quisque dolor orci, hendrerit eu ante nec, dapibus rutrum lacus. Morbi id lectus nisl.',
      ],
    },
    {
      id: 7,
      name: 'News',
      showPosition: 'right',
      text: [
        'Lorem7 ipsum dolor sit amet, consectetur adipiscing elit. In dictum sed leo id accumsan. Proin viverra luctus mi ut posuere. Nulla fringilla orci ac lorem ultrices finibus. Integer pellentesque imperdiet dolor, vitae vestibulum elit suscipit eu. Maecenas eleifend commodo bibendum. Mauris id justo interdum, pharetra nisi lobortis, maximus orci. Aenean pulvinar cursus quam ac accumsan. Proin vel urna quis nibh vehicula condimentum in sit amet eros. Nunc non molestie arcu, eu accumsan nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lobortis eget ligula quis gravida.',
        'raesent7 efficitur nunc et efficitur condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tincidunt velit at justo finibus tristique. Suspendisse convallis mi id lacus pretium consectetur. Vestibulum finibus odio arcu, tincidunt gravida felis dignissim eget. Quisque dolor orci, hendrerit eu ante nec, dapibus rutrum lacus. Morbi id lectus nisl.',
      ],
    },
  ]);
  return (
    <div className='header'>
      <div className='top-nav-bar'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' alt='logo' />
          <span className='logo-text'>Mini Shop</span>
        </Link>
        <div className='options'>
          <Link className='option' to='/cart'>
            <FaShoppingBasket />
            <span className='option-text'>cart</span>
          </Link>
          <Link className='option' to='/register'>
            Register
          </Link>
          {/* {currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
              Sing Out
            </div>
          ) : ( */}
          <Link className='option' to='/signin'>
            Sing In
          </Link>
          {/* )} */}
        </div>
      </div>

      <div className='bottom-nav-bar'>
        <ProductsNav name={'Products'} />
        {infoNav.map((option) => {
          return (
            <InfoNav
              key={option.id}
              name={option.name}
              showPosition={option.showPosition}
              text={option.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
