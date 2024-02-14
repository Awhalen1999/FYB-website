import React from 'react';
import './About.css';
import profilePicture from '../../assets/profile-picture.png';

const Paragraph = ({ text }) => <p className='about-body'>{text}</p>;

const About = () => {
  const paragraphs = [
    "I get it. Being in pain is not fun! That's why I became a massage therapist. Initially, my journey began as a means to manage my own pain, but over time, my focus shifted to assisting others in finding relief.",
    "I've been practicing therapeutic massage for 27 years. Every time a patient leaves my treatment room and tells me that they are feeling better, it gives me an immense sense of satisfaction.",
  ];

  return (
    <div id='About me' className='about-background'>
      <div className='about-container'>
        <div className='about-text'>
          <h1 className='about-heading'>Hey there, I'm Alaina</h1>
          <h3 className='about-subheading'>
            A registered massage therapist specializing in myofascial release.
          </h3>
          <div className='primary-div'></div>
          {paragraphs.map((paragraph, index) => (
            <Paragraph key={index} text={paragraph} />
          ))}
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
