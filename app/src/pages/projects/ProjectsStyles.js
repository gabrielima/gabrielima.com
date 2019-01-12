import styled from 'styled-components';
import media from './../../styles/utils/media';
import theme from './../../styles/theme';

const ProjectsContainer = styled.section`
  text-align: center;
  padding: 1rem 1rem;

  ${media.sm`padding: 3rem 1rem;`}
`;

ProjectsContainer.Title = styled.h1`
  display: inline-block;
  position: relative;
  margin: 1rem;
  font-size: 2.5rem;
  ${media.sm`font-size: 3.2rem;`}

  :after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    height: 4px;
    width: 30%;
    background-color: ${theme.colors.primary};
  }  
`;

export default ProjectsContainer;