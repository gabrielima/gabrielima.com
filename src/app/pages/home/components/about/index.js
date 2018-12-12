import React from 'react';
import './about.scss';

const About = ({ bio }) => (
  <section className="section about">
    <h2 className="section__title">About</h2>

    <div className="card about__description">
      <img src="/static/img/gabrielima.jpg" alt="Gabriel Lima" className="about__picture" />

      <p>{bio}</p>

      <a
        href="/static/resume.pdf"
        className="btn about__resume"
        target="_blank"
        rel="noopener nofollow">
        Resume
      </a>
    </div>
  </section>
);

export default About;
