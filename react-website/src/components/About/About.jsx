import React from 'react';
import './About.css';
import profilePicture from '../../assets/profile-picture.png';
import { aboutText } from '../Text';

const About = () => {
  return (
    <div id='About me' className='about-background'>
      <div className='about-container'>
        <div className='about-text'>
          <h1 className='about-heading'>{aboutText.heading}</h1>
          <h3 className='about-subheading'>{aboutText.subheading}</h3>
          <div className='about-div'></div>
          <p className='about-body'>{aboutText.paragraph1}</p>
          <p className='about-body'>{aboutText.paragraph2}</p>
          <button
            className='about-button'
            onClick={() =>
              document
                .getElementById('Services')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            VIEW TREATMENT OPTIONS
          </button>
          <button
            className='about-button'
            onClick={() =>
              document
                .getElementById('Contact me')
                .scrollIntoView({ behavior: 'smooth' })
            }
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
