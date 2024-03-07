import React from 'react';
import './Weather.css';

function Weather(props) {
  let text;
  let customBackground;

  if(props.temp < 15) {
    text = "Il fait froid !";
    customBackground = {background: 'rgb(226, 249, 193)'};
  } else {
    text = "Il fait bon !";
    customBackground = {background: 'rgb(249, 204, 193)'};
  } 
  
  let weatherimg;
  if(props.weather == "sunny") {
    weatherimg = "/img/04t.png";
  } else if(props.weather == "cloudy") {
    weatherimg = "/img/03s.png";
  } else if(props.weather == "rainy") {
    weatherimg = "/img/01w.png";
  } else if(props.weather == "snowy") {
    weatherimg = "/img/02x.png";
  }

  return (
    <div className="weather" style={customBackground}>
      <h2 className='weathercity'>{props.city}</h2>

      <div className='mainweather'>
        <div>
          <p className="temperature">{props.temp}°C</p>
          <p className="textWeather" >{text}</p>
        </div>

        <img className="imgWeather" src={weatherimg} />
      </div>
    </div>
  );
}

export default Weather;