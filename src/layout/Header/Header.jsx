import React from 'react';
import Navigation from '../Navigation/Navigation';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <p className="header__title">To-do-application</p>
      <Navigation />
    </header>
  );
};

export default Header;
