import React from 'react';
import './CTA.css';
import { ctaText } from '../Text';
import CTAImage from '../../assets/CTA-image.png';

const CTA = () => {
  const mainText = ctaText.main;

  return (
    <div className='cta' style={{ backgroundImage: `url(${CTAImage})` }}>
      <p className='cta-text'>{mainText}</p>
    </div>
  );
};

export default CTA;
