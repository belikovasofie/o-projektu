import React from 'react';
import './style.css';

const About = ({ name, text, photo, quote, link, film }) => {
  return (
    <div className="container">
      <div className="about">
        <div className="about__flex">
          <h3 className="about__name">{name}</h3>
          <div>
            <img className="about__photo" src={photo} />
          </div>
          <p className="about__intro">{text}</p>
        </div>

        {/* <div className="about__quote">
          <p className="about__quote-text">{quote}</p>
          <a className="about__quote-link" href={link}>
            {film}
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default About;
