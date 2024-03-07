import React from 'react';
import './WeatherList.css';
import Weather from '../Weather';

function WeatherList(props) {
  const listItems = props.list.map(item =>
    <Weather key={item.id} weather={item.weather} temp={item.temp} city={item.ville} />
  );
  
  return (
    <>{listItems}</>
  );
}

export default WeatherList;