import React from 'react';
import './slider.styles.scss';
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../../assets/img/shop-7.jpg';
import photo2 from '../../assets/img/h1.jpg';
import photo3 from '../../assets/img/shop-5.jpg';

const Slider = () => {
  return (
    <Carousel className='slider'>
      <Carousel.Item>
        <img className='d-block w-100' src={photo1} alt='First slide' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={photo2} alt='Third slide' />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={photo3} alt='Third slide' />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
