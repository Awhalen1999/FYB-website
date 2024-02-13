import React from 'react';
import './Services.css';
import ServicesImage from '../../assets/FindYourBalance-Logo.png';

const ServiceCard = ({ title }) => (
  <div className='service-card'>
    <img src={ServicesImage} alt={title} className='service-card-image' />
    <p className='service-card-text'>Placeholder text for {title}</p>
    <button className='service-card-button'>BOOK NOW</button>
  </div>
);

const Services = () => {
  return (
    <div id='Services' className='services'>
      <h1>Services</h1>
      <div className='cards-container'>
        <ServiceCard title='Service 1' />
        <ServiceCard title='Service 2' />
      </div>
    </div>
  );
};

export default Services;
