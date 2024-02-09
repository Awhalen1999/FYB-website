import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero-image.png';

window.onload = function () {
  document.body.classList.add('loaded');
};

const Hero = () => {
  return (
    <div className='hero' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className='hero-content'>
        <h1 className='hero-title-1'>Relieve pain</h1>
        <h1 className='hero-title-2'>Embrace life's adventures</h1>
        <p className='hero-subtitle'>
          With myofascial Release Registered Massage Therapy
        </p>
        <button className='hero-button'>BOOK AN APPOINTMENT</button>
      </div>
    </div>
  );
};

export default Hero;
