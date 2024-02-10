import React from 'react';
import './CTA.css';
import CTAImage from '../../assets/CTA-image.png';
import LogoImage from '../../assets/FindYourBalance-Logo-BG-Remove.png';

const CTA = () => (
  <div className='cta' style={{ backgroundImage: `url(${CTAImage})` }}>
    <img src={LogoImage} alt='Logo' className='cta-logo' />
    <p className='cta-text'>Get the pain relief you deserve.</p>
  </div>
);

export default CTA;
