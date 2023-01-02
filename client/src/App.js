import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './server.js';
import ArtistDetails from './pages/ArtistDetails.js';
import Header from './Header.js';
import './App.css';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div>
       <Header/>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/artist/:name" component={ArtistDetails}></Route>
        </div>
      </BrowserRouter></div>
    )
  }
}

export default App;
