import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render () {
    return (
      <div className="AppHeader">
        <a href="/">
          <header className="header-title">LastFM API</header>
        </a>
      </div>
    )
  } 
}

export default Header;