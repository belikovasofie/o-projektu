import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const About = ({ name, text, photo }) => {
  return (
    <div className="container">
      <h2>{name}</h2>
      <img src={photo} />
      <main className="main">{text}</main>
    </div>
  );
};

export default About;
