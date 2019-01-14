import React, { Component } from 'react';
import TodosList from './reducers/TodosList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Todos List</h2>
          <TodosList/>
      </div>
    );
  }
}

export default App;
