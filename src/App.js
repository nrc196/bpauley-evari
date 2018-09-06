import React, { Component } from 'react';

import Movie from './Movie';

import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';

/* global fetch */

const getMoviesFromApiAsync = () => (
  fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    }
  )
);


class App extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    getMoviesFromApiAsync().then(movies => this.setState({movies: movies}));
  }

  render() {
    const {movies} = this.state;
    return (
      <Grid container spacing={8} style={{width: 'calc(100% + 4px)', padding: 8, backgroundColor: grey['500']}}>
        {movies.map(movie => (
          <Grid item xs={4}>
            <Movie movie={movie} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default App;
