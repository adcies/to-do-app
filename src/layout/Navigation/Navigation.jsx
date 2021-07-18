import React from 'react';
import { useState } from 'react';

import ToggleMainNav from '../../components/ToggleMainNav/ToggleMainNav';

import './Navigation.scss';

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleMenu = () => {
    setIsActive((prevValue) => !prevValue);
  };

  const navClassName = `main-navigation${
    isActive ? ' main-navigation--active' : ''
  }`;

  return (
    <>
      <nav className={navClassName}>
        <ul className="main-navigation__list">
          <li className="main-navigation__element">Example 1</li>
          <li className="main-navigation__element">Example 2</li>
          <li className="main-navigation__element">Example 3</li>
          <li className="main-navigation__element">Example 4</li>
        </ul>
      </nav>
      <ToggleMainNav handleClick={handleToggleMenu} />
    </>
  );
};

export default Navigation;
