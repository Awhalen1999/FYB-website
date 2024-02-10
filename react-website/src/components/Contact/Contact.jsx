import React from 'react';
import './Contact.css';
import LogoImage from '../../assets/FindYourBalance-LogoPlusText-BG-Remove.png';
import {
  RiContactsLine,
  RiPhoneLine,
  RiMapPin2Line,
  RiTimeLine,
} from 'react-icons/ri';

const ContactInfo = ({ IconComponent, text }) => (
  <div className='contact-info'>
    <IconComponent />
    <p>{text}</p>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <div className='contact-left'>
      <img src={LogoImage} alt='Logo' className='contact-logo' />
      <h1>Get in touch</h1>
      <h2>Curious about our massage services?</h2>
      <h2>Reach out and let's chat!</h2>
    </div>
    <div className='contact-right'>
      <button className='contact-button'>
        <RiContactsLine />
        Contact Me
      </button>
      <ContactInfo IconComponent={RiPhoneLine} text='(905) 960-4614' />
      <ContactInfo
        IconComponent={RiMapPin2Line}
        text='18642 Leslie Street, East Gwillimbury, ON L0G 1V0'
      />
      <ContactInfo
        IconComponent={RiTimeLine}
        text='Office Hours: By appointment'
      />
    </div>
  </div>
);

export default Contact;
