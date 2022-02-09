import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://liber-t-admin.herokuapp.com/',
  baseURL: 'http://localhost:3001/',
  headers: { accessToken: `${localStorage.getItem('accessToken')}` },
});

export default api;