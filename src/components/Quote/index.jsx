import React from 'react';
import './style.css';
import { quotes } from './quotes';

const Quote = () => {
  const cislo = Math.floor(Math.random() * (quotes.length + 1));
  let citat = `<div class="citaty__element">
  <div class="citat__text">${quotes[cislo].quote}</div>
  <div class="citat__movie">${quotes[cislo].movie}</div>
</div>`;
  return citat;
};

export default Quote;
