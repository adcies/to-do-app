import React from 'react';

import './Weather.scss';

const Weather = ({ closeWeather }) => {
  return (
    <div className="weather">
      <button onClick={closeWeather} className="weather__close">
        Close
      </button>
    </div>
  );
};

export default Weather;
