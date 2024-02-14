import React, { useEffect } from 'react';
import './Hero.css';
import heroImage from '../../assets/hero-image.png';

const Hero = () => {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <div className='hero' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className='hero-content'>
        <h1 className='hero-title-1'>Relieve pain</h1>
        <h1 className='hero-title-2'>Embrace life's adventures</h1>
        <p className='hero-subtitle'>
          With myofascial Release Registered Massage Therapy
        </p>
        <button className='hero-button-1'>BOOK AN APPOINTMENT</button>
        <button
          className='hero-button-2'
          onClick={() =>
            document
              .getElementById('Learn more')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Hero;
