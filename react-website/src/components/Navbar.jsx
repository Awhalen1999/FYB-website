import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { SlMenu, SlArrowUp } from 'react-icons/sl';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div>
        <a href='#top'>
          <img src='http://via.placeholder.com/100x100' alt='Company Logo' />
        </a>
      </div>
      <div>
        <button onClick={toggleMenu}>
          {isOpen ? <SlArrowUp size={30} /> : <SlMenu size={30} />}
        </button>
        {isOpen && (
          <div>
            <ul>
              <li>
                <Link to='about' smooth={true} duration={1000}>
                  About
                </Link>
              </li>
              <li>
                <Link to='why' smooth={true} duration={1000}>
                  Why
                </Link>
              </li>
              <li>
                <Link to='steps' smooth={true} duration={1000}>
                  Steps
                </Link>
              </li>
              <li>
                <Link to='services' smooth={true} duration={1000}>
                  Services
                </Link>
              </li>
              <li>
                <Link to='contact' smooth={true} duration={1000}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
