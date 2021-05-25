import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const About = ({ name, text, photo, citate, link, film }) => {
  return (
    <div className="container">
      <h3>{name}</h3>
      <img className="foto" src={photo} />
      <main className="main">{text}</main>
      <p>{citate}</p>
      <a href={link}>{film}</a>
    </div>
  );
};

export default About;
