import React from 'react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import ToggleMainNav from '../../components/ToggleMainNav/ToggleMainNav';

import './Navigation.scss';

const Navigation = () => {
  const navigationRef = useRef(null);

  const [isGreaterThan1024px, setIsGreaterThan1024px] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsGreaterThan1024px(true);
      } else {
        setIsGreaterThan1024px(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isGreaterThan1024px) {
      const nav = navigationRef.current;
      nav.removeAttribute('style');
      setIsActive(false);
    }
  }, [isGreaterThan1024px]);

  const handleToggleMenu = () => {
    const nav = navigationRef.current;

    if (isActive) {
      gsap.to(nav, { duration: 0.3, ease: 'power1.out', left: '-100%' });
    } else {
      gsap.to(nav, { duration: 0.3, ease: 'power1.out', left: '-18%' });
    }
    setIsActive((prevValue) => !prevValue);
  };

  return (
    <>
      <nav ref={navigationRef} className="main-navigation">
        <ul className="main-navigation__list">
          <li className="main-navigation__element">Example 1</li>
          <li className="main-navigation__element">Example 2</li>
          <li className="main-navigation__element">Example 3</li>
          <li className="main-navigation__element">Example 4</li>
        </ul>
      </nav>
      {isGreaterThan1024px ? null : (
        <ToggleMainNav handleClick={handleToggleMenu} />
      )}
    </>
  );
};

export default Navigation;
