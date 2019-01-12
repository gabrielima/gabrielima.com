import styled from 'styled-components';

import theme from './../../styles/theme';
import media from './../../styles/utils/media';

export const ProjectsContainer = styled.section`
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

ProjectsContainer.List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-top: 1rem;

  ${media.sm` 
    margin-top: 3rem;
  `}
`;

ProjectsContainer.List_Item = styled.li`
  display: flex;
  flex: 0 0 100%;
  margin-bottom: 3rem;

  ${media.sm`
    flex: 0 0 45%;
  `};
  
  ${media.md`
    flex: 0 0 30%;
  `};
`;

export const ProjectsItem = styled.a`
  text-decoration: none;
  color: ${theme.colors.default};
`;

ProjectsItem.ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding: 30px 0 0;
  text-decoration: none;
  overflow: hidden;
  background: ${props => props['gradient'][0]};
  background: ${props => `linear-gradient(to bottom right, ${props['gradient'][0]}, ${props['gradient'][1]})`};

  :hover {
    img { bottom: -1px }
  }
`;

ProjectsItem.Image = styled.img`
  width: 70%;
  height: auto;
  object-fit: cover;
  position: relative;
  bottom: -15px;
  transition: bottom .4s ease;
`;

ProjectsItem.Title = styled.h4`
  position: relative;
  z-index: 10;
  text-align: center;
  background: #fff;
  margin: 1rem 0;
  width: 100%;
  color: ${theme.colors.default};
`;

ProjectsItem.Type = styled.span`
  display: block;
  margin-bottom: 1rem;
`;

ProjectsItem.Stack = styled.span`
  display: block;
`;