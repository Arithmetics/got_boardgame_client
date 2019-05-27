import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Game from './components/Game';
import CreateGame from './components/CreateGame';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={ Home } />
            <Route exact path="/game/new" component={ CreateGame } />
            <Route path="/game/:id(\d+)" component={ Game } />
            <div className="container">
              <Route exact path="/register" component={ Register } />
              <Route exact path="/login" component={ Login } />
            </div>
          </div>
        </Router>
    </Provider>
    );
  }
}

export default App;
