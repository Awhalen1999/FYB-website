import React from 'react';
import './Content.css';
import { TfiCheckBox } from 'react-icons/tfi';
import { contentText } from '../Text';

const Section = ({ text }) => (
  <div className='content-section'>
    <div className='icon-wrapper'>
      <TfiCheckBox size={35} />
    </div>
    <p>{text}</p>
  </div>
);

const Body = () => {
  const mainText = contentText.main;
  const sections = contentText.sections;

  return (
    <div className='content-container'>
      <div className='content'>
        <p
          className='content-main'
          dangerouslySetInnerHTML={{ __html: mainText }}
        ></p>
        <div className='sections-wrapper'>
          {sections.map((group, index) => (
            <div key={index} className='content-group'>
              {group.map((section, index) => (
                <Section key={index} text={section} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
