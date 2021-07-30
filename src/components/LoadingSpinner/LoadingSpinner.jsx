import React, { useEffect, useContext } from 'react';

import { ActiveButtonContext } from '../../context/ActiveButtonContext';

import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  const { setActive } = useContext(ActiveButtonContext);

  useEffect(() => {
    setActive(false);
    return () => {
      setActive(true);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="spinner">
      <div className="spinner__element"></div>
    </div>
  );
};

export default LoadingSpinner;
