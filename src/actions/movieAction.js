import getMoviesFromApiAsync from '../getMoviesFromApiAsync';

export const requestMovies = () => {
  return { type: 'REQUEST_MOVIES', loading: true }
};

export const receiveMovies = movies => {
  return { type: 'RECEIVE_MOVIES', movies: movies, loading: false }
};

export const fetchMovies = () => {
  return dispatch => {
    return getMoviesFromApiAsync().then(movies => dispatch(receiveMovies(movies)));
  }
};
