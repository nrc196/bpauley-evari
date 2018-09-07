import React, { Component } from 'react';

import DidMountMovieList from './movies/DidMountMovieList';
import ButtonMovieList from './movies/ButtonMovieList';
import ReduxButtonMovieList from './movies/ReduxButtonMovieList';

import grey from '@material-ui/core/colors/grey';

class App extends Component {
  render() {
    return (
      <div style={{padding: 8, backgroundColor: grey['100']}}>
        <DidMountMovieList />
        <ButtonMovieList />
        <ReduxButtonMovieList />
      </div>
    );
  }
}

export default App;
