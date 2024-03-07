import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/api';

import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);

  const listItems = users.map(people =>
    <li key={people.id}>{people.prenom} {people.nom}</li>
  );
  
  return (
    <ul>{listItems}</ul>
  );
}

export default UserList;