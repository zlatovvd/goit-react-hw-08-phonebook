import axios from 'axios';

export const fetchApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set: token => {
    fetchApi.defaults.headers.Authorization = token;
  },

  remove: () => {
    fetchApi.defaults.headers.Authorization = null;
  },
};
