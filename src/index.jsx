import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

import SofiPhoto from './img/sofi.photo.jpg';

const App = () => (
  <Router>
    <div className="content">
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about/eva">
          <About name="Eva" text="o Evě" />
        </Route>
        <Route path="/about/sofi">
          <About
            name="Sofi"
            text="O Jsem velký introvert a plánovač, mám ráda pořádek a organizování. Zatím pracuji v oblasti managementu a financí, ale mým cílem je získat práci v IT. Ve volném čase ráda čtu, hraju počítačové hry, sportuji, cvičím se psem a samozřejmě koukám na filmy a seriály.
            Kódování mě baví, a taky ráda rozmyšlim nad řešením problémů, jak zjednodušit a vytvořit hezký a čitelný kód. Baví mě práce s různými databázemi a hezky prezentovat získané informace na stránky.
"
            photo={SofiPhoto}
            quote="All we have to decide is what to do with the time that is given us."
            link={
              'https://www.csfd.cz/film/4711-pan-prstenu-spolecenstvo-prstenu/prehled/'
            }
            film="Lord of the Rings"
          />
        </Route>
      </Switch>

      <Footer />
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
