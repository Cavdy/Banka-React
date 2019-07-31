import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <header className="showcase-header">
      <div className="showcase-logo"><Link to="/">Banka</Link></div>
      <ul className="showcase-list">
      <li className="showcase-item">
        <a href="#" className="showcase-link">Login</a>
      </li>
      <li className="showcase-item">
        <Link to="/register" className="showcase-link">Register</Link>
      </li>
      </ul>
    </header>
  )
}

export default navbar;
