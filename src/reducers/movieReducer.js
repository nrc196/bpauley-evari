const initialState = {
  movies: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'REQUEST_MOVIES':
    return {
      ...state,
      loading: action.loading
    };
  case 'RECEIVE_MOVIES':
    return {
      ...state,
      movies: action.movies,
      loading: action.loading
    };
  default:
    return state;
  }
};
