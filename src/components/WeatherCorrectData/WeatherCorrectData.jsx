import React from 'react';

import './WeatherCorrectData.scss';

const WeatherCorrectData = ({ data }) => {
  const {
    weather: [{ description, icon }],
    main: { temp, pressure, humidity },
  } = data;

  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-correct">
      <p className="weather-correct__temp">
        Temperature: <span className="weather-correct__value">{temp} C</span>
      </p>
      <p className="weather-correct__condition">
        Condition: <span className="weather-correct__value">{description}</span>
      </p>
      <span className="weather-correct_icon">
        <img
          className="weather-correct__img"
          src={iconURL}
          alt="Weather icon"
        />
      </span>
      <p className="weather-correct__pressure">
        Pressure: <span className="weather-correct__value">{pressure} hPa</span>
      </p>
      <p className="weather-correct__humidity">
        Humidity: <span className="weather-correct__value">{humidity} %</span>
      </p>
    </div>
  );
};

export default WeatherCorrectData;
