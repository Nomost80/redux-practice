const BASE_URL = 'http://localhost:3000/api';

export default function request(endpoint, config = {}, authentication = false) {
  if (authentication) {
    const token = localStorage.getItem('access_token') || null;
    if (token) {
      if (config.hasOwnProperty('headers')) { config.headers.append('Authorization', `Bearer ${token}`); } else { config.headers = { Authorization: `Bearer ${token}` }; }
    } else {
      throw 'No token saved!';
    }
  }
  return fetch(BASE_URL + endpoint, config)
    .then((response) => {
      const data = response.json();
      if (data.status.startsWith('4')) { return Promise.reject(data.errors); }
      return data;
    })
    .catch(err => console.log(err));
}
