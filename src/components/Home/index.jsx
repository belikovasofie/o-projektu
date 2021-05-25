import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="container">
      <h3>Aplikace - vyběr filmu</h3>
      <main className="main">
        Za poslední rok čím dál tím víc lidí sleduje filmy a seriály. Spousta z
        nás si vybírá stále stejné a najít něco nového nebývá snadné. Naše
        aplikace nabídne uživateli možnost vyhledávání filmů podle zadaných
        kritérií ale taky náhodnější výběr prostřednictvím zábavného kvízu.
      </main>

      {/* <div className="tlacitka">
        <div className="tlac">
          <a href="#">o Evě</a>
        </div> */}

      {/* <div className="tlac">
          <a href="#">o Sofyi</a>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
