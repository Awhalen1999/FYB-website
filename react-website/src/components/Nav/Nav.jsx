import React, { useState } from 'react';
import './Nav.css';
import logo from '../../assets/FindYourBalance-LogoPlusText-BG-Remove-2.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
            <li onClick={() => scrollToSection('About me')}>About me</li>
            <li onClick={() => scrollToSection('Learn more')}>Learn more</li>
            <li onClick={() => scrollToSection('Services')}>Services</li>
            <li onClick={() => scrollToSection('Contact me')}>Contact me</li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className='mobile-menu'>
          <button className='menu-toggle' onClick={toggleMenu}>
            {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>
          {isMenuOpen && (
            <ul className='mobile-nav-list'>
              <li onClick={() => scrollToSection('About')}>About</li>
              <li onClick={() => scrollToSection('Learn more')}>Learn more</li>
              <li onClick={() => scrollToSection('Services')}>Services</li>
              <li onClick={() => scrollToSection('Contact me')}>Contact me</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
