import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => (
  <header className="menu">
    <ul>
      <li>
        <Link to="/">O FILMECH</Link>
      </li>
      <li>
        O NÁS
        <div className="dropdown-content">
          <Link to="/about/eva">O Eve</Link>
          <Link to="/about/sofi">O Sofi</Link>
        </div>
      </li>
    </ul>
  </header>
);

export default Header;
