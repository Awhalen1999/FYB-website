import React from 'react';
import './ContentBanner.css';
import PersonalizedIcon from '../../assets/personalized.png';
import EvidenceIcon from '../../assets/evidence.png';
import NourishmentIcon from '../../assets/nourishment.png';

const Section = ({ icon, alt, text }) => (
  <div className='section'>
    <img src={icon} alt={alt} className='icon' />
    <p className='content-banner-text'>{text}</p>
  </div>
);

const ContentBanner = () => (
  <div id='Learn more' className='content-banner'>
    <div className='item-box-2'>
      <h1 className='content-banner-header'>The complete care package</h1>
      <div className='sections-container'>
        <Section
          icon={PersonalizedIcon}
          alt='Personalized Icon'
          text='Personalized care for optimal wellness'
        />
        <Section
          icon={EvidenceIcon}
          alt='Evidence Icon'
          text='Evidence-based treatment plans for lasting relief'
        />
        <Section
          icon={NourishmentIcon}
          alt='Nourishment Icon'
          text='Natural and effective nourishment'
        />
      </div>
    </div>
  </div>
);

export default ContentBanner;
