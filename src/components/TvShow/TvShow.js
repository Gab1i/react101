import React from 'react';
import './TvShow.css';

function TvShow(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Saisons: {props.nbSeasons}</p>
    </div>
  );
}

export default TvShow;