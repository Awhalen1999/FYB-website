import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      &copy; {year} Find Your Balance. All rights reserved.
    </div>
  );
};

export default Footer;
