import React from 'react';
import { Link } from 'react-scroll';
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

const Nav = () => {
  const menuItems = ['About', 'Learn more', 'Services', 'Contact me'];

  return (
    <nav className='nav-container'>
      <div>
        <img className='logo' src={logoImage} alt='Company Logo' />
      </div>
      <div className='menu-container'>
        <DesktopMenu menuItems={menuItems} />
      </div>
    </nav>
  );
};

export default Nav;
