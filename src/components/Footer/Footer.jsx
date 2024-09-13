import React from 'react';
import './Footer.css';
import { footerText } from '../Text';

const Footer = () => {
  const year = new Date().getFullYear();
  const copyright = footerText.copyright;

  return (
    <div className='footer'>
      &copy; {year} {copyright}
    </div>
  );
};

export default Footer;
