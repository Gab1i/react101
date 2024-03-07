import config from '../config';

const apiKey = config.apiKey;

export const getUsers = () => {
  return fetch('https://api.cogform.fr/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    // body: JSON.stringify(data)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Erreur');
    }
    return response.json();
  });
};