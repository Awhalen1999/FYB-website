import React, { useState, useEffect } from 'react';
import './Benefits.css';
import { TfiCheckBox } from 'react-icons/tfi';

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    'Reduce pain and soreness',
    'Decrease muscle / myofascial tension',
    'Improve circulation & organ function',
  ];

  const toggleVisibility = () => {
    if (window.pageYOffset > 25) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className='item-box'>
      <div className={`item-section-container ${isVisible ? 'visible' : ''}`}>
        {sections.map((section, index) => (
          <div key={index} className='item-section'>
            <div className='item-content'>
              <TfiCheckBox size={40} />
              <p>{section}</p>
            </div>
          </div>
        ))}
      </div>
      <button className='learn-more-button'>LEARN MORE</button>
    </div>
  );
};

export default Benefits;
