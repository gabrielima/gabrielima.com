import styled from 'styled-components';

const ProjectsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

ProjectsList.Item = styled.li`
  display: flex;
  flex-direction: column;
  flex: 0 0 30%;
  margin-bottom: 20px;
`;

ProjectsList.Item.Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

ProjectsList.Item.Title = styled.span`
`;

export default ProjectsList;