import styled from 'styled-components';
import media from './../../../../styles/utils/media';

const SkillsContainer = styled.div`
`;

SkillsContainer.Area = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  ${media.sm`
    flex-direction: row;
  `}
`;

SkillsContainer.Area_Name = styled.h4`
  margin: 0 0 1rem;
  
  ${media.sm`
    margin: 0;
    display: flex;
    flex: 0 0 150px;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
  `}
`;

SkillsContainer.List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

SkillsContainer.List_Item = styled.li`
  display: inline-block;
  padding: 6px 15px;
  border-radius: 10px;
  border: 1px solid;
  font-size: 0.7rem;
  margin: 4px;
`;

export default SkillsContainer;