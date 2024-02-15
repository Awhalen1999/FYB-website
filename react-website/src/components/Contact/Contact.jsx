import React from 'react';
import './Contact.css';
import { contactText } from '../Text';
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

const Contact = () => {
  const header1 = contactText.header1;
  const header2 = contactText.header2;
  const phone = contactText.phone;
  const address = contactText.address;
  const hours = contactText.hours;

  return (
    <div id='Contact me' className='contact'>
      <div className='contact-left'>
        <img src={LogoImage} alt='Logo' className='contact-logo' />
        <h2>{header1}</h2>
        <h2>{header2}</h2>
      </div>
      <div className='contact-right'>
        <button className='contact-button'>
          <RiContactsLine />
          Contact Me
        </button>
        <ContactInfo IconComponent={RiPhoneLine} text={phone} />
        <ContactInfo IconComponent={RiMapPin2Line} text={address} />
        <ContactInfo IconComponent={RiTimeLine} text={hours} />
      </div>
    </div>
  );
};

export default Contact;
