import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

import SofiPhoto from './img/sofi.photo.png';

const App = () => (
  <Router>
    <div className="content">
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about/eva">
          <About name="Eva" text="o Eve" />
        </Route>
        <Route path="/about/sofi">
          <About name="Sofi" text="Ja kotik" photo={SofiPhoto} />
        </Route>
      </Switch>

      <Footer />
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
