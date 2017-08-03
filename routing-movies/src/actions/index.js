import axios from 'axios';

export const getMovies = () => {
  const request = axios.get('http://localhost:5000/movies');
  return {
    type: 'GET_MOVIES',
    payload: request,
  }
};
