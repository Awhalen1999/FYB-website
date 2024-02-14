import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Nav.css';
import logoImage from '../../assets/FindYourBalance-LogoPlusText-BG-Remove-2.png';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const MenuItem = ({ item }) => (
  <Link to={item} smooth duration={1000}>
    <li>{item}</li>
  </Link>
);

const DesktopMenu = ({ menuItems }) => (
  <ul className='desktop-menu'>
    {menuItems.map((item, index) => (
      <MenuItem key={index} item={item} />
    ))}
  </ul>
);

const MobileMenu = ({ menuItems, isOpen, toggleMenu }) => (
  <div className='mobile-menu'>
    <button className='nav-button' onClick={toggleMenu}>
      <HiOutlineMenuAlt3 /> dropdown
    </button>
    {isOpen && (
      <ul className='nav-dropdown'>
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    )}
  </div>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['About me', 'Learn more', 'Services', 'Contact me'];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='nav-container'>
      <div>
        <img className='logo' src={logoImage} alt='Company Logo' />
      </div>
      <div className='menu-container'>
        <DesktopMenu menuItems={menuItems} />
        <MobileMenu
          menuItems={menuItems}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Nav;
