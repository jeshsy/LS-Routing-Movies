import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/navigation'

import ShowMovies from './components/showMovies';
import MovieDetails from './components/MovieDetails';
import Home from './components/home';

import rootReducer from './reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router>
      {/* <App /> */}
      <div>
      <Navigation />
      <Route  exact path='/' component={Home} />
      <Route  exact path='/movies' component={ShowMovies} />
      <Route  path='/movies/:id' component={MovieDetails} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
