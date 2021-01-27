import React from 'react';
import './footer.styles.scss';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='container text-left'>
        <div className='row'>
          <div className='col-md-3'>
            <h1>Useful Links</h1>
            <p>How to order</p>
            <p>Payment methods</p>
            <p>Delivery and Warranty</p>
          </div>
          <div className='col-md-3'>
            <h1>Company</h1>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>News</p>
          </div>
          <div className='col-md-3'>
            <h1>Follow Us On</h1>
            <p>
              <FaFacebookF /> Facebook
            </p>
            <p>
              <FaInstagram /> Instagram
            </p>
            <p>
              <FaYoutube /> Youtube
            </p>
          </div>
          <div className='col-md-3 footer-image'>
            <h1>Download App</h1>
            <h4>
              GET IT ON <b>Google Play</b>
            </h4>
            <h4>
              Download on the <b>App Store</b>
            </h4>
          </div>
        </div>
        <hr />
        <p className='copyright'>Created by Dragan Dobrijević &copy; 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
