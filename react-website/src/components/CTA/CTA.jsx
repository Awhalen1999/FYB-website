import React from 'react';
import './CTA.css';
import CTAImage from '../../assets/CTA-image.png';

const CTA = () => (
  <div className='cta' style={{ backgroundImage: `url(${CTAImage})` }}>
    <p className='cta-text'>Get the pain relief you deserve.</p>
  </div>
);

export default CTA;
