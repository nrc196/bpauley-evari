import React, { Component, Fragment } from 'react';

import Movie from './Movie';
import getMoviesFromApiAsync from '../getMoviesFromApiAsync';

import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class DidMountMovieList extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    getMoviesFromApiAsync().then(movies => this.setState({ movies: movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      <Fragment>
        <Toolbar>
          <Typography variant="title" color="inherit">
            componentDidMount Retrieval
          </Typography>
        </Toolbar>
        <Grid container spacing={8}>
          {movies.map(movie => (
            <Grid key={movie.id} item xs={12} sm={6} md={4}>
              <Movie movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Fragment>
    );
  }
}

export default DidMountMovieList;
