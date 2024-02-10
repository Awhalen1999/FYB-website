import React from 'react';
import './Services.css';
import ServicesImage from '../../assets/services-image.png';

const ServicesText = () => (
  <div className='services-text'>
    <h2>Registered Massage Therapy/Specializing in Myofascial Release</h2>
    <p>
      Enhance your body's natural healing process, feel the difference as your
      range of motion improves, stress and tension decrease, and your overall
      sense of well-being is elevated. Experience increased blood flow, reduced
      pain, and inflammation.
    </p>
    <button className='services-button'>BOOK AN APPOINTMENT</button>
  </div>
);

const Services = () => (
  <div className='services'>
    <h1>Services</h1>
    <div className='services-content'>
      <img src={ServicesImage} alt='Services' className='services-image' />
      <ServicesText />
    </div>
  </div>
);

export default Services;
