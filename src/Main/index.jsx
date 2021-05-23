import React from 'react';
import { render } from 'react-dom';
import './style.css';

const Main = () => {
  return (
    <>
      <div className="content">
        <header className="menu">
          <ul>
            <li>
              <a href="#">O FILMECH</a>
            </li>

            <li>
              <a href="#">O NÁS</a>
            </li>
          </ul>
        </header>

        <div className="container">
          <main className="main">
            Aplikace, která uživateli pomůže vybrat film.
          </main>

          <div className="tlacitka">
            <div className="tlac">
              <a href="#">o Evě</a>
            </div>

            <div className="tlac">
              <a href="#">o Sofyi</a>
            </div>
          </div>
        </div>
        <footer className="footer">Máme rády Czechitas</footer>
      </div>
    </>
  );
};

export default Main;
