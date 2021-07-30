import React, { useState, useEffect, useRef } from 'react';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import './WeatherForecast.scss';

const WeatherForecast = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const ref = useRef();

  useEffect(() => {
    //loads data and sets isDataLoaded to true
    setTimeout(() => {
      //prevents 'fetching' data on unmounted component
      if (ref.current) {
        setIsDataLoaded(true);
      }
    }, 1000);
  }, []);

  return (
    <div ref={ref} className="weather-forecast">
      {isDataLoaded ? (
        <div className="weather-forecast__data">data loaded</div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default WeatherForecast;
