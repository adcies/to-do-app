import React, { useState, useContext } from 'react';

import WeatherForecast from '../WeatherForecast/WeatherForecast';
import { ActiveButtonContext } from '../../context/ActiveButtonContext';

import './Weather.scss';

const currentDate = new Date().toLocaleDateString();

const Weather = ({ closeWeather }) => {
  const { active } = useContext(ActiveButtonContext);

  const [inputValue, setInputValue] = useState('');
  const [showWeatherForecastComponent, setShowWeatherForecastComponent] =
    useState(false);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setShowWeatherForecastComponent(false);
    setTimeout(() => {
      setShowWeatherForecastComponent(true);
    }, 0);
    setInputValue('');
  };

  return (
    <div className="weather">
      <button onClick={closeWeather} className="weather__close">
        Close
      </button>
      <div className="weather__info-wrapper">
        <p className="weather__date-info">
          Weather forecast for{' '}
          <span className="weather__date">{currentDate}</span>
        </p>
        <div className="weather__data-container">
          <form className="weather__form" onSubmit={handleOnSubmit}>
            <input
              className="weather__city"
              type="text"
              placeholder="Type your city!"
              value={inputValue}
              onChange={handleOnChange}
            />
            <input
              className="weather__submit"
              type="submit"
              value="Confirm"
              disabled={!active}
            />
          </form>
          {showWeatherForecastComponent && <WeatherForecast />}
        </div>
      </div>
    </div>
  );
};

export default Weather;
