import styled from 'styled-components';
import media from './../../../../styles/utils/media';
import theme from './../../../../styles/theme';

const ProjectsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
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

ProjectsList.Item_Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding: 30px 0 0;
  text-decoration: none;
  overflow: hidden;
  background: ${props => props['gradient'][0]};
  background: ${props => `linear-gradient(to bottom right, ${props['gradient'][0]}, ${props['gradient'][1]})`};
  pointer-events: ${props => props.disabled ? 'none' : 'initial'};

  :hover {
    img { bottom: -1px }
  }
`;

ProjectsList.Item_Img = styled.img`
  width: 70%;
  height: auto;
  object-fit: cover;
  position: relative;
  bottom: -15px;
  transition: bottom .4s ease;
`;

ProjectsList.Item_Title = styled.span`
  position: relative;
  z-index: 10;
  text-align: center;
  background: #fff;
  padding: 15px 10px;
  width: 100%;
  color: ${theme.colors.default};
`;

export default ProjectsList;