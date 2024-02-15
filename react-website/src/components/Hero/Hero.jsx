import React, { useEffect } from 'react';
import './Hero.css';
import heroImage from '../../assets/hero-image.png';
import { heroText } from '../Text';

const Hero = () => {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <div className='hero' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className='hero-content'>
        <h1 className='hero-title-1'>{heroText.title1}</h1>
        <h1 className='hero-title-2'>{heroText.title2}</h1>
        <div className='hero-div' />
        <p className='hero-subtitle'>{heroText.subtitle}</p>
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
