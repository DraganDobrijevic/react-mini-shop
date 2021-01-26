import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer>
      <div class='container text-left'>
        <div class='row'>
          <div class='col-md-3'>
            <h1>Useful Links</h1>
            <p>How to order</p>
            <p>Payment methods</p>
            <p>Delivery and Warranty</p>
          </div>
          <div class='col-md-3'>
            <h1>Company</h1>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>News</p>
          </div>
          <div class='col-md-3'>
            <h1>Follow Us On</h1>
            <p>
              <i class='fab fa-facebook-square'></i> Facebook
            </p>
            <p>
              <i class='fab fa-instagram'></i> Instagram
            </p>
            <p>
              <i class='fas fa-play'></i> Youtube
            </p>
          </div>
          <div class='col-md-3 footer-image'>
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
        <p class='copyright'>Created by Dragan Dobrijević &copy; 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
