import React, { Component } from 'react';

import ShowMovies from './components/showMovies';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowMovies />
      </div>
    );
  }
}

export default App;
