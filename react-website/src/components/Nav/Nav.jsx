import React, { useState } from 'react';
import './Nav.css';
import logo from '../../assets/FindYourBalance-LogoPlusText-BG-Remove-2.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { navText } from '../Text';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navItems = navText.navItems;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <img src={logo} alt='Logo' className='logo' />
        {/* Desktop Menu */}
        <div className='desktop-menu'>
          <ul className='desktop-nav-list'>
            {navItems.map((item, index) => (
              <li key={index} onClick={() => scrollToSection(item.id)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className='mobile-menu'>
          <button className='menu-toggle' onClick={toggleMenu}>
            {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>
          {isMenuOpen && (
            <ul className='mobile-nav-list'>
              {navItems.map((item, index) => (
                <li key={index} onClick={() => scrollToSection(item.id)}>
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
