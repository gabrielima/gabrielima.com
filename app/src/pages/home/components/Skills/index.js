import React from 'react';

import HomeSection from '../../HomeStyles';
import SkillsContainer from './SkillsStyles';

const Skills = ({ skills }) => (
  <HomeSection>
    <HomeSection.Title>Skills</HomeSection.Title>

    <SkillsContainer>
      {skills && skills.map((area, index) => (
        <SkillsContainer.Area>
          <SkillsContainer.Area_Name>
            <span>{area.area}:</span>
          </SkillsContainer.Area_Name>
          
          <SkillsContainer.List>
            {area.skills.map((skill, index) => (
              <SkillsContainer.List_Item key={index}>{skill}</SkillsContainer.List_Item>
            ))}
          </SkillsContainer.List>
        </SkillsContainer.Area>
      ))}
    </SkillsContainer>
  </HomeSection>
);


export default Skills;
