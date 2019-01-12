import styled from 'styled-components';
import media from './../../../../styles/utils/media';

const ProjectsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
`;

ProjectsList.Item = styled.li`
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  margin-bottom: 20px;

  ${media.sm`
    flex: 0 0 45%;
  `};
  
  ${media.md`
    flex: 0 0 30%;
  `};
`;

ProjectsList.Item_Link = styled.a``;

ProjectsList.Item_Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

ProjectsList.Item_Title = styled.span`
`;

export default ProjectsList;