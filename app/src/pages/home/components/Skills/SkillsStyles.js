import styled from 'styled-components';

const SkillsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

SkillsList.Item = styled.li`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid;
`;

export default SkillsList;