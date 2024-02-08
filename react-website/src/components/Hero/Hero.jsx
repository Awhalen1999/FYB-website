import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero-image.png';

const Hero = () => {
  return (
    <div className='hero' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className='hero-content'>
        <h1 className='hero-title-1'>Relieve pain</h1>
        <h1 className='hero-title-2'>Embrace life's adventures</h1>
        <p className='hero-subtitle'>
          With Myofascial Release Registered Massage Therapy
        </p>
        <button className='hero-button'>Placeholder</button>
      </div>
    </div>
  );
};

export default Hero;
