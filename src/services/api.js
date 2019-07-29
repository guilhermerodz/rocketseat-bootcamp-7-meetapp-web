import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJpYXQiOjE1NjQxOTYwMTcsImV4cCI6MTU2NDgwMDgxN30.DoLqlile2ySRuflmRN3gA0J3UVuPMHQXBr_2vWLfHC8`;

export default api;
