import React from 'react';
import './Movie.css';

function Movie(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Durée: {props.duration}</p>
    </div>
  );
}

export default Movie;