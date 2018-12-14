import React from 'react';

import HomeSection from '../../HomeStyles';
import SkillsList from './SkillsStyles';

const Skills = ({ skills }) => (
  <HomeSection>
    <HomeSection.Title>Skills</HomeSection.Title>

    <SkillsList>
      {skills && skills.map((skill, index) => (
        <SkillsList.Item key={index}>{skill}</SkillsList.Item>
      ))}
    </SkillsList>
  </HomeSection>
);


export default Skills;
