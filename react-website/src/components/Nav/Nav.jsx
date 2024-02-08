import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { SlMenu, SlArrowUp } from 'react-icons/sl';
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ['1', '2', '3'];

  return (
    <nav>
      <div>
        <a href='#top'>
          <img
            className='logo'
            src='https://via.placeholder.com/100'
            alt='Company Logo'
          />
        </a>
      </div>
      <div className='dropdown-container'>
        <button className='menu-button' onClick={toggleMenu}>
          {isOpen ? <SlArrowUp /> : <SlMenu />}
        </button>
        {isOpen && (
          <div className='dropdown'>
            <ul>
              {menuItems.map((item) => (
                <li key={item}>
                  <Link to={item} smooth={true} duration={1000}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
