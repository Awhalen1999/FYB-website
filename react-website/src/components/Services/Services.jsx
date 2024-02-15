import React from 'react';
import './Services.css';
import ServicesImage from '../../assets/massage.png';
import { serviceCardText } from '../Text';

const ServiceCard = () => (
  <div className='service-card'>
    <img
      src={ServicesImage}
      alt={serviceCardText.title}
      className='service-card-image'
    />
    <h2 className='service-card-title'>{serviceCardText.title}</h2>
    <div className='service-div'></div>
    <p className='service-card-text'>{serviceCardText.paragraph}</p>
    <button className='service-card-button'>BOOK NOW</button>
  </div>
);

const Services = () => {
  return (
    <div id='Services' className='services'>
      <h1>Services</h1>
      <div className='cards-container'>
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
