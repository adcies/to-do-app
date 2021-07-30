import React from 'react';

import './Weather.scss';

const Weather = ({ closeWeather }) => {
  return (
    <div className="weather">
      <button onClick={closeWeather} className="weather__close">
        Close
      </button>
      <div className="weather__info-wrapper">
        <p className="weather__date-info">
          Weather forecast for <span className="weather__date">19.09.2021</span>
        </p>
        <div className="weather__data-container">data</div>
      </div>
    </div>
  );
};

export default Weather;
