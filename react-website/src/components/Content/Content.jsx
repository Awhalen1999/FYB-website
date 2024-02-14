import React from 'react';
import './Content.css';
import { TfiCheckBox } from 'react-icons/tfi';

const Section = ({ text }) => (
  <div className='content-section'>
    <div className='icon-wrapper'>
      <TfiCheckBox size={35} />
    </div>
    <p>{text}</p>
  </div>
);

const Body = () => {
  const sections = [
    [
      "Your body's natural healing process will get a boost",
      'Experience an improved range of motion',
      'Stress and muscle tension decreases',
    ],
    [
      'Enjoy an improved sense of wellbeing',
      'Improve circulation & organ function',
      'Pain and inflammation reduces',
    ],
  ];

  return (
    <div className='content-container'>
      <div className='content'>
        <p className='content-main'>
          <strong>Myofascial release massage therapy</strong> is a specialized
          form of massage that focuses on the fascia, a connective tissue that
          surrounds and supports muscles, bones, and organs throughout the body.
          The fascia can become tight, restricted, or damaged due to factors
          such as stress, injury, poor posture, or inflammation, leading to pain
          and discomfort.
        </p>
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
