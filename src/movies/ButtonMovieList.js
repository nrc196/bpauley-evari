import React, { Component, Fragment } from 'react';

import Movie from './Movie';
import getMoviesFromApiAsync from '../getMoviesFromApiAsync';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import green from '@material-ui/core/colors/green';

class ButtonMovieList extends Component {
  state = {
    movies: [],
    loading: false,
  }

  handleButtonClick = () => {
    this.setState({ movies: [], loading: true }, () => (
      getMoviesFromApiAsync().then(movies => this.setState({ movies: movies, loading: false }))
    ));
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <Fragment>
        <Toolbar>
          <Typography variant="title" color="inherit">
            Button Retrieval
          </Typography>
          <div style={{margin: 8, position: 'relative'}}>
            <Button
              variant="contained"
              color="primary"
              disabled={loading}
              onClick={this.handleButtonClick}
            >
              Get Movies
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                style={{
                  color: green[500],
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: -12,
                  marginLeft: -12
                }}
              />
            )}
          </div>
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

export default ButtonMovieList;
