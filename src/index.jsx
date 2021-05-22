import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Main from './Main';

const App = () => (
  <>
    <Main />
  </>
);

render(<App />, document.querySelector('#app'));
