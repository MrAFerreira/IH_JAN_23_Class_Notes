import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/"> Home </Link> |<Link to="/projects"> Projects </Link> |
      <Link to="/projects/new"> Add Project </Link>
    </nav>
  );
}

export default Navbar;
