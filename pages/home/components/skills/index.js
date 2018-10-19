import React from 'react';
import './skills.scss';

const Skills = ({ skills }) => (
  <section className="section skills">
    <h2 className="section__title">Skills</h2>

    <ul className="skills__list">
      {skills && skills.map((skill, index) => (<li className="btn skill" key={index}>{skill}</li>))}
    </ul>
  </section>
);

export default Skills;
