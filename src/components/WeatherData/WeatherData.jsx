import React from 'react';

import './WeatherData.scss';
import WeatherCorrectData from '../WeatherCorrectData/WeatherCorrectData';

const WeatherData = ({ data }) => {
  const createInfo = (data) => {
    if (data.cod === '404') {
      return <p className="weather-data__error">You entered wrong city! </p>;
    } else if (data.cod !== 200) {
      return <p className="weather-data__error">Something went Wrong </p>;
    } else {
      return <WeatherCorrectData data={data} />;
    }
  };

  const info = createInfo(data);

  return <div className="weather-data">{info}</div>;
};

export default WeatherData;
