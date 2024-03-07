import React from 'react';

import Title from '../components/Title';
import Bonjour from '../components/Bonjour';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import Weather from '../components/Weather';
import HouseList from '../components/HouseList';
import WeatherList from '../components/WeatherList';
import Button from '../components/Button';
import Input from '../components/Input';
import UserList from '../components/UserList';

function Home({ setPage }) {
    let movie = {type: "movie", "title": "Un jour de pluie à New-York", "duration": "1h20"};
    let tvshow = {type: "tvshow", "title": "Grey's Anatomy", "nbSeasons": "20"};
    let weatherList = [
      {ville: "Bordeaux", weather: "sunny", temp: "30", id: 1},
      {ville: "Sydney", weather: "sunny", temp: "45", id: 2},
      {ville: "Québec", weather: "snowy", temp: "-2", id: 3},
      {ville: "Osaka", weather: "rainy", temp: "26", id: 4},
    ]
  return (
    <div className="Home">
        <Title />

        <UserList />

        <Input />

        <Bonjour nom="John" />

        <Button text="Mon bouton"/>

        <NavBar setPage={setPage} />

        <Card data={movie} />
        <Card data={tvshow} />


        <Weather temp='-1' weather='snowy'/>

        <HouseList />
        <WeatherList list={weatherList} />
    </div>
  );
}

export default Home;