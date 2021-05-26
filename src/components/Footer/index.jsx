import React from 'react';
import './style.css';
import Heart from '../../img/heart.png';

const Footer = () => (
  <footer className="footer">
    <p>
      Máme rády{' '}
      <a className="footer__link" href="https://www.czechitas.cz/cs/">
        Czechitas
      </a>
    </p>
    <img src={Heart} />
  </footer>
);

export default Footer;
