import React from 'react';
import './Services.css';
import { serviceCardText } from '../Text';
import ServicesImage from '../../assets/massage.png';

const ServiceCard = () => {
  const title = serviceCardText.title;
  const paragraph = serviceCardText.paragraph;

  return (
    <div className='service-card'>
      <img src={ServicesImage} alt={title} className='service-card-image' />
      <h2 className='service-card-title'>{title}</h2>
      <div className='service-div'></div>
      <p className='service-card-text'>{paragraph}</p>
      <button className='service-card-button'>BOOK NOW</button>
    </div>
  );
};

const Services = () => (
  <div id='Services' className='services'>
    <h1>Services</h1>
    <div className='cards-container'>
      <ServiceCard />
    </div>
  </div>
);

export default Services;
