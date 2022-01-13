import HomeSection from './../../../styles/pages/HomeStyles';
import SkillsContainer from './../../../styles/components/Home/SkillsStyles';

const Skills = ({ skills }: any) => (
  <HomeSection>
    <HomeSection.Title>Skills</HomeSection.Title>

    <SkillsContainer>
      {skills && skills.map((area: any, index: number) => (
        <SkillsContainer.Area key={index}>
          <SkillsContainer.Area_Name>
            <span>{area.area}:</span>
          </SkillsContainer.Area_Name>
          
          <SkillsContainer.List>
            {area.skills.map((skill: any, index: number) => (
              <SkillsContainer.List_Item key={index}>
                {skill}
              </SkillsContainer.List_Item>
            ))}
          </SkillsContainer.List>
        </SkillsContainer.Area>
      ))}
    </SkillsContainer>
  </HomeSection>
);


export default Skills;
