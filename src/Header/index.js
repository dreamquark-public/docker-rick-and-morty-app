import React from 'react';
import logo from './rickandmortylogo.png';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="rick and morty logo" />
    </header>
  );
}

export default Header;
