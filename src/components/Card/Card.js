import React from 'react';
import './Card.css';
import Movie from '../Movie';
import TvShow from '../TvShow';

function Card(props) {
  let content;

  if(props.data.type == "movie") {
    content = <Movie title = {props.data.title} duration = {props.data.duration} />;
  } else {
    content = <TvShow title = {props.data.title} nbSeasons = {props.data.nbSeasons} />;
  }

  return (
    <>
      {content}
    </>
  );
}

export default Card;