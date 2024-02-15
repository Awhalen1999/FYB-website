import React from 'react';
import './About.css';
import profilePicture from '../../assets/profile-picture.png';
import { aboutText } from '../Text';

const About = () => {
  const heading = aboutText.heading;
  const subheading = aboutText.subheading;
  const paragraph1 = aboutText.paragraph1;
  const paragraph2 = aboutText.paragraph2;

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='About me' className='about-background'>
      <div className='about-container'>
        <div className='about-text'>
          <h1 className='about-heading'>{heading}</h1>
          <h3 className='about-subheading'>{subheading}</h3>
          <div className='about-div'></div>
          <p className='about-body'>{paragraph1}</p>
          <p className='about-body'>{paragraph2}</p>
          <button className='about-button' onClick={() => scrollTo('Services')}>
            VIEW TREATMENT OPTIONS
          </button>
          <button
            className='about-button'
            onClick={() => scrollTo('Contact me')}
          >
            CONTACT ME
          </button>
        </div>
        <img src={profilePicture} alt='Profile' className='profile-picture' />
      </div>
    </div>
  );
};

export default About;
