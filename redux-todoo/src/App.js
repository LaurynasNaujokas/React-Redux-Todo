import React, { Component } from 'react';
import ShowingGames from './containers/ShowingGames';
import GameDetails from './containers/Game-details';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Games List:</h2>
          <ShowingGames/>
          <h3>Game details:</h3>
          <GameDetails/>
      </div>
    );
  }
}

export default App;
