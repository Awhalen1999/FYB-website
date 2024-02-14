import React from 'react';
import './Services.css';
import ServicesImage from '../../assets/massage.png';
const ServiceCard = ({ title }) => (
  <div className='service-card'>
    <img src={ServicesImage} alt={title} className='service-card-image' />
    <h2 className='service-card-title'>{title}</h2>
    <div className='service-div'></div>
    <p className='service-card-text'>
      Enhance your body's natural healing process, feel the difference as your
      range of motion improves, stress and tension decrease, and your overall
      sense of well-being is elevated. Experience increased blood flow, reduced
      pain, and inflammation
    </p>
    <button className='service-card-button'>BOOK NOW</button>
  </div>
);
const Services = () => {
  return (
    <div id='Services' className='services'>
      <h1>Services</h1>
      <div className='cards-container'>
        <ServiceCard title='Registered Massage Therapy/Specializing in Myofascial Release' />
      </div>
    </div>
  );
};
export default Services;
