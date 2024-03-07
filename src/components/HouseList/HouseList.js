import React from 'react';
import './HouseList.css';

function HouseList(props) {
  let people = [
    {nom: "Potter", prenom: "Harry", id: 1},
    {nom: "Granger", prenom: "Hermione", id: 2},
    {nom: "Weasley", prenom: "Ron", id: 3}
  ]

  /*const listItems = people.map(people =>
    <li key={people.id}>{people.prenom} {people.nom}</li>
  );*/

  const listItems = [];
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    listItems.push(
      <li key={person.id}>{person.prenom} {person.nom}</li>
    );
  }
  
  return (
    <ul>{listItems}</ul>
  );
}

export default HouseList;