import React from 'react';
import './CTA.css';
import CTAImage from '../../assets/CTA-image.png';
import { ctaText } from '../Text';

const CTA = () => (
  <div className='cta' style={{ backgroundImage: `url(${CTAImage})` }}>
    <p className='cta-text'>{ctaText.main}</p>
  </div>
);

export default CTA;
