import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers = {
  'Accept': 'application/vnd.github.v3+json',
  'Content-Type': 'application/json',
};

export const axiosConfig = axios;
