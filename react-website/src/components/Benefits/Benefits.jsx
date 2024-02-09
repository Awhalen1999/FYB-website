import React, { useState, useEffect } from 'react';
import './Benefits.css';
import { TfiCheckBox } from 'react-icons/tfi';

const Section = ({ text }) => (
  <div className='item-section'>
    <div className='item-content'>
      <TfiCheckBox size={40} />
      <p>{text}</p>
    </div>
  </div>
);

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    'Reduce pain and soreness',
    'Decrease muscle / myofascial tension',
    'Improve circulation & organ function',
  ];

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 25);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className='item-box'>
      <div className={`item-section-container ${isVisible ? 'visible' : ''}`}>
        {sections.map((section, index) => (
          <Section key={index} text={section} />
        ))}
      </div>
      <button className='learn-more-button'>LEARN MORE</button>
    </div>
  );
};

export default Benefits;
