import axios from 'axios';

const headers = {
  Accept: 'application/json',
};
const BASE_URL = "https://jsonplaceholder.typicode.com"
const service = axios.create({
  baseURL: BASE_URL,
  headers,
});

export default service;