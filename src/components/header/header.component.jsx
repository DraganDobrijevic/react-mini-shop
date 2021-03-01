import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

import ProductsNav from '../products-nav/products-nav.component';
import InfoNav from '../info-nav/info-nav.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import NAV_INFO_DATA from './nav-info.data';

const Header = ({ currentUser, hidden }) => {
  console.log('Header:', currentUser);
  // const query = useSelector((state) => state);
  // console.log('Header:', query);
  const [infoNav] = useState(NAV_INFO_DATA);

  const history = useHistory();

  return (
    <div className='header'>
      <div className='top-nav-bar'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' alt='logo' />
          <span className='logo-text'>Mini Shop</span>
        </Link>
        <div className='options'>
          {currentUser && (
            <span className='option option-text'>
              {currentUser.displayName}
            </span>
          )}
          <div className='option'>
            <CartIcon />
          </div>
          {hidden ? null : <CartDropdown />}
          {currentUser ? (
            <div
              className='option'
              onClick={async () => {
                await auth.signOut();
                history.push('/login');
              }}
            >
              Sing Out
            </div>
          ) : (
            <>
              <Link className='option' to='/register'>
                Register
              </Link>
              <Link className='option' to='/login'>
                Sign In
              </Link>
            </>
          )}
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

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// });

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
