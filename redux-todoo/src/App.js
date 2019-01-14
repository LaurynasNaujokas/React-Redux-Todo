import React, { Component } from 'react';
import ShowingGames from './containers/ShowingGames';
import GameDetails from './containers/Game-details';
import ShowingMovies from './containers/ShowingMovies';
import MoviesDetails from './containers/MoviesDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Games List:</h2>
          <ShowingGames/>
          <h3>Game details:</h3>
          <GameDetails/>
          <h3>Movies List:</h3>
          <ShowingMovies/>
          <h3>Movie Details:</h3>
          <MoviesDetails/>
      </div>
    );
  }
}

export default App;
