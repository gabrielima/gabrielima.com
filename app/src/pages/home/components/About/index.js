import React from 'react';

import HomeSection from '../../HomeStyles';

const About = ({ bio }) => (
  <HomeSection>
    <HomeSection.Title>About</HomeSection.Title>

    <div>
      <img src="/static/img/gabrielima.jpg" alt="Gabriel Lima" />

      <p>{bio}</p>

      <a
        href="/static/resume.pdf"
        target="_blank"
        rel="noopener nofollow">
        Resume
      </a>
    </div>
  </HomeSection>
);

export default About;
