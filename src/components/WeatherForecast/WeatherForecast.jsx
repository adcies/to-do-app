import React, { useState, useEffect, useRef } from 'react';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import WeatherData from '../WeatherData/WeatherData';

import { createURL } from '../../helpers/api';

import './WeatherForecast.scss';

const WeatherForecast = ({ city }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [fetchedData, setFetchedData] = useState({});

  const ref = useRef();

  useEffect(() => {
    const URL = createURL(city);

    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (ref.current) {
          setFetchedData(data);
          setIsDataLoaded(true);
          if (!(data.cod >= 200 && data.cod <= 299)) {
            throw new Error(`Something went wrong: Http error: ${data.cod}`);
          }
        }
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line
  }, []);

  return (
    <div ref={ref} className="weather-forecast">
      {isDataLoaded ? <WeatherData data={fetchedData} /> : <LoadingSpinner />}
    </div>
  );
};

export default WeatherForecast;
