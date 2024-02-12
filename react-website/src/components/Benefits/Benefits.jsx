import React from 'react';
import './Benefits.css';
import { TfiCheckBox } from 'react-icons/tfi';
import Slide from 'react-reveal/Slide';

const Section = ({ text }) => (
  <Slide right>
    <div className='item-section'>
      <div className='item-content'>
        <TfiCheckBox size={40} />
        <p>{text}</p>
      </div>
    </div>
  </Slide>
);

const Benefits = () => {
  const sections = [
    'Reduce pain and soreness',
    'Decrease muscle / myofascial tension',
    'Improve circulation & organ function',
  ];

  return (
    <div className='item-box'>
      <div className='sections-container'>
        {sections.map((section, index) => (
          <Section key={index} text={section} />
        ))}
      </div>
      <button className='learn-more-button'>LEARN MORE</button>
    </div>
  );
};

export default Benefits;
