import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const MenuLink = ({ to, children }) => (
  <NavLink exact to={to} activeStyle={{ textDecoration: 'underline' }}>
    {children}
  </NavLink>
);

const Header = () => (
  <header className="menu">
    <ul>
      <li>
        <MenuLink to="/">O FILMECH</MenuLink>
      </li>
      <li>
        O NÁS
        <div className="dropdown-content">
          <MenuLink to="/about/eva">O Evě</MenuLink>
          <MenuLink to="/about/sofi">O Sofi</MenuLink>
        </div>
      </li>
    </ul>
  </header>
);

export default Header;
