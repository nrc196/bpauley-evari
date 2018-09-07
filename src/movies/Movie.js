import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Movie = ({ movie }) => (
  <Card>
    <CardContent>
      <Typography variant="title">
        {movie.title}
      </Typography>
      <Typography color="textSecondary">
        {`Released: ${movie.releaseYear}`}
      </Typography>
    </CardContent>
  </Card>
);

Movie.defaultProps = {
  movie: {
    title: '',
    releaseYear: ''
  }
};

export default Movie;
