import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { SlMenu, SlArrowUp } from 'react-icons/sl';
import './Nav.css';
import logoImage from '../../assets/FindYourBalance-LogoPlusText-BG-Remove-2.png';

const MenuItem = ({ item }) => (
  <li>
    <Link to={item} smooth duration={1000}>
      {item}
    </Link>
  </li>
);

const DesktopMenu = ({ menuItems }) => (
  <ul className='nav-dropdown desktop-menu'>
    {menuItems.map((item, index) => (
      <MenuItem key={index} item={item} />
    ))}
  </ul>
);

const MobileMenu = ({ menuItems, isOpen, setIsOpen }) => (
  <div className='mobile-menu'>
    <button className='nav-button' onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <SlArrowUp size='3em' /> : <SlMenu size='3em' />}
    </button>
    <ul className={`nav-dropdown ${isOpen ? 'open' : ''}`}>
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  </div>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['About', 'Learn more', 'Services', 'Contact me'];

  return (
    <nav className='nav-container'>
      <div>
        <a href='#top'>
          <img className='logo' src={logoImage} alt='Company Logo' />
        </a>
      </div>
      <div className='menu-container'>
        <DesktopMenu menuItems={menuItems} />
        <MobileMenu
          menuItems={menuItems}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </nav>
  );
};

export default Nav;
