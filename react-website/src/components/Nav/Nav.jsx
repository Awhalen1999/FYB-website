import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { SlMenu, SlArrowUp } from 'react-icons/sl';
import './Nav.css';
import logoImage from '../../assets/FindYourBalance-Logo-BG-Remove.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ['1', '2', '3'];

  return (
    <nav className='nav-container'>
      <div>
        <a href='#top'>
          <img className='logo' src={logoImage} alt='Company Logo' />
        </a>
      </div>
      <div>
        <button className='nav-button' onClick={toggleMenu}>
          {isOpen ? <SlArrowUp size='3em' /> : <SlMenu size='3em' />}
        </button>
        {isOpen && (
          <ul className='nav-dropdown'>
            {menuItems.map((item) => (
              <li key={item}>
                <Link to={item} smooth={true} duration={1000}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
