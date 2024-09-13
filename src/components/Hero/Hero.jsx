import React, { useEffect } from 'react';
import './Hero.css';
import heroImage from '../../assets/hero-image.png';
import { heroText } from '../Text';

const Hero = () => {
  const title1 = heroText.title1;
  const title2 = heroText.title2;
  const subtitle = heroText.subtitle;

  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='hero' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className='hero-content'>
        <h1 className='hero-title-1'>{title1}</h1>
        <h1 className='hero-title-2'>{title2}</h1>
        <div className='hero-div' />
        <p className='hero-subtitle'>{subtitle}</p>
        <button className='hero-button-1'>BOOK AN APPOINTMENT</button>
        <button
          className='hero-button-2'
          onClick={() => scrollTo('Learn more')}
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Hero;
