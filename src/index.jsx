import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

import SofiPhoto from './img/sofi.photo.jpg';
import EvaPhoto from '../src/img/evaphoto.JPG';
// ./src/img/evaphoto.jpg';
import Quote from '../src/components/Quote';

const App = () => (
  <Router>
    <div className="content">
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
          <Quote />
        </Route>
        <Route path="/about/eva">
          <About
            name="Eva"
            text="Jsem taky plánovač, ale duší designér čehokoli :-). Ráda začínám nové projekty, předem je promýšlím do detailů a pak se do nich vrhám. Naštěstí je i dokážu přivést až do konce. Pracuji jako investiční referent v našem městě. Daří se mi tak časově skloubit rodinný a pracovní život. Časem bych se ráda přesunulu do IT. Kódění mě baví a hodně mě zajímá UX. Ve volném čase ráda běhám, jezdím na kole nebo dělám jógu"
            photo={EvaPhoto}
          />
          <Quote />
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
