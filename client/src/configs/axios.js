import axios from 'axios';

const api = axios.create({
  baseURL: '',
  headers: { accessToken: `${localStorage.getItem('accessToken')}` },
});

export default api;