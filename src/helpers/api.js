//free api ID
const apiID = '036d8cd2a292c25aaf5044e4e434f79a';

export const createURL = (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`;
  return URL;
};
