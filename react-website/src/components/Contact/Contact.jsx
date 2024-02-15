import React from 'react';
import './Contact.css';
import LogoImage from '../../assets/FindYourBalance-LogoPlusText-BG-Remove.png';
import {
  RiContactsLine,
  RiPhoneLine,
  RiMapPin2Line,
  RiTimeLine,
} from 'react-icons/ri';
import { contactText } from '../Text';

const ContactInfo = ({ IconComponent, text }) => (
  <div className='contact-info'>
    <IconComponent />
    <p>{text}</p>
  </div>
);

const Contact = () => (
  <div id='Contact me' className='contact'>
    <div className='contact-left'>
      <img src={LogoImage} alt='Logo' className='contact-logo' />
      <h2>{contactText.header1}</h2>
      <h2>{contactText.header2}</h2>
    </div>
    <div className='contact-right'>
      <button className='contact-button'>
        <RiContactsLine />
        Contact Me
      </button>
      <ContactInfo IconComponent={RiPhoneLine} text={contactText.phone} />
      <ContactInfo IconComponent={RiMapPin2Line} text={contactText.address} />
      <ContactInfo IconComponent={RiTimeLine} text={contactText.hours} />
    </div>
  </div>
);

export default Contact;
