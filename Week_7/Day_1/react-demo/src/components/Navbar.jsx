import React, { Component } from 'react';
import CoolButton from './CoolButton';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <CoolButton />
        <CoolButton />
        <CoolButton />
      </nav>
    );
  }
}

export default Navbar;
