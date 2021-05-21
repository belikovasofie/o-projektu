import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => (
  <div className="container">
    <h1>huráá</h1>
    <p>Zdravím tě, Sofye a přeji hezký večer 😎. </p>
  </div>
);

render(<App />, document.querySelector('#app'));
