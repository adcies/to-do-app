import React, { useState, useEffect, useRef } from 'react';

import { NavLink } from 'react-router-dom';

import gsap from 'gsap';

import ToggleMainNav from '../../components/ToggleMainNav/ToggleMainNav';

import './Navigation.scss';

const Navigation = () => {
  const navigationRef = useRef(null);

  const [isGreaterThan1023px, setIsGreaterThan1023px] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setIsGreaterThan1023px(true);
      } else {
        setIsGreaterThan1023px(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isGreaterThan1023px) {
      const nav = navigationRef.current;
      nav.removeAttribute('style');
      setIsActive(false);
    }
  }, [isGreaterThan1023px]);

  const handleToggleMenu = () => {
    const nav = navigationRef.current;

    if (isActive) {
      gsap.to(nav, { duration: 0.3, ease: 'power1.out', left: '-110%' });
    } else {
      gsap.to(nav, { duration: 0.3, ease: 'power1.out', left: '-18%' });
    }
    setIsActive((prevValue) => !prevValue);
  };

  const handleClickLink = () => {
    if (!isGreaterThan1023px) {
      handleToggleMenu();
    }
  };

  return (
    <>
      <nav ref={navigationRef} className="main-navigation">
        <ul className="main-navigation__list">
          <li className="main-navigation__element">
            <NavLink
              onClick={handleClickLink}
              to="/"
              exact
              className="main-navigation__element-href"
              activeClassName="main-navigation__element-href--active"
            >
              Home
            </NavLink>
          </li>
          <li className="main-navigation__element">
            <NavLink
              onClick={handleClickLink}
              to="/tasks"
              className="main-navigation__element-href"
              activeClassName="main-navigation__element-href--active"
            >
              All tasks
            </NavLink>
          </li>
        </ul>
      </nav>
      {isGreaterThan1023px ? null : (
        <ToggleMainNav handleClick={handleToggleMenu} />
      )}
    </>
  );
};

export default Navigation;
