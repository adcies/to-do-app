import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './ToggleMainNav.scss';

const ToggleMainNav = ({ handleClick }) => {
  return (
    <div className="toggle-nav" onClick={handleClick}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};

export default ToggleMainNav;
