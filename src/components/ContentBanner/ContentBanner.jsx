import React from 'react';
import './ContentBanner.css';
import { contentBannerText } from '../Text';
import PersonalizedIcon from '../../assets/personalized.png';
import EvidenceIcon from '../../assets/evidence.png';
import NourishmentIcon from '../../assets/nourishment.png';

const Section = ({ icon, alt, text }) => (
  <div className='section'>
    <img src={icon} alt={alt} className='icon' />
    <p className='content-banner-text'>{text}</p>
  </div>
);

const ContentBanner = () => {
  const header = contentBannerText.header;
  const sections = contentBannerText.sections;

  const icons = [
    { icon: PersonalizedIcon, alt: 'Personalized Icon' },
    { icon: EvidenceIcon, alt: 'Evidence Icon' },
    { icon: NourishmentIcon, alt: 'Nourishment Icon' },
  ];

  return (
    <div id='Learn more' className='content-banner'>
      <div className='item-box-2'>
        <h1 className='content-banner-header'>{header}</h1>
        <div className='sections-container'>
          {sections.map((section, index) => (
            <Section
              key={index}
              icon={icons[index].icon}
              alt={icons[index].alt}
              text={section.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentBanner;
