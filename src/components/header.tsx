import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src="./Logos/cookie.svg" alt="logo"></img>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes color="white"zIndex="999999" /> : <FaBars color="white" zIndex="999999"/>}
      </div>
      <div className={`links-container ${isOpen ? 'open' : ''}`}>
        <div className='links'>
        <div className='current'>
          <a href="https://c00kiefactory.xyz">Home</a>
        </div>
        <Link href="/?scrollTo=about">About</Link>
        <a href="https://gamble.c00kiefactory.xyz">Gambler</a>
        <a href="https://reveal.c00kiefactory.xyz">Reveal</a>
        <a href="https://recycle.c00kiefactory.xyz">Recycler</a>
        <a href="https://store.c00kiefactory.xyz">Store</a>
      </div>
      </div>
    </div>
  );
};

export default Header;
