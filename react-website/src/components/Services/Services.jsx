import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Services.css';
import placeholderImage from '../../assets/placeholder.png';

const ServiceCard = ({ title }) => (
  <div className='service-card'>
    <img src={placeholderImage} alt={title} className='service-card-image' />
    <h3 className='service-card-title'>{title}</h3>
  </div>
);

const Services = () => (
  <div id='Services' className='services'>
    <h1>Services</h1>
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      centerMode
      centerSlidePercentage={50}
    >
      <ServiceCard title='Service 1' />
      <ServiceCard title='Service 2' />
      <ServiceCard title='Service 3' />
      <ServiceCard title='Service 4' />
      <ServiceCard title='Service 5' />
    </Carousel>
  </div>
);

export default Services;
