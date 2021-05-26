import React from 'react';
import './style.css';
import { quotes } from './quotes';

const Quote = () => {
  const cislo = Math.floor(Math.random() * (quotes.length + 1));

  return (
    <div class="citaty__element">
      <div class="citat__text">{quotes[cislo].quote}</div>
      <div class="citat__movie">{quotes[cislo].movie}</div>
    </div>
  );
};

export default Quote;
