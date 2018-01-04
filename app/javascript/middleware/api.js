const BASE_URL = 'http://localhost:3000/api';
const errorStatus = [400, 401, 402, 403, 404, 405, 500];

export default function request(endpoint, config = {}, authentication = false) {
  if (authentication) {
    const token = localStorage.getItem('access_token') || null;
    if (token) {
      if (config.hasOwnProperty('headers')) {
        config.headers.append('Authorization', `Bearer ${token}`);
      } else {
        config.headers = { Authorization: `Bearer ${token}` };
      }
    }
  }
  return fetch(BASE_URL + endpoint, config)
    .then((response) => {
      const data = response.json();
      if (errorStatus.includes(data.status)) { return Promise.reject(data.errors); }
      return data;
    })
    .catch(err => console.log(err));
}
