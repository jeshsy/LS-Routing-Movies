import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/navigation'
import ShowMovies from './components/showMovies';
import Test from './components/test'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <ShowMovies /> */}
        <Route exact path='/' component={ShowMovies}></Route>
        <Route path='/test' component={Test}></Route>
      </div>
    );
  }
}

export default App;
