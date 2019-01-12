import styled from 'styled-components';
import media from '../../styles/utils/media';
import theme from '../../styles/theme';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px 0;
  border-bottom: 5px solid ${theme.colors.primary};
  
  ${media.sm`
    justify-content: space-between;
    flex-direction: row;
  `}
`;

const Menu = styled.nav`
  display: block;
`;

Menu.Item = styled.a`
  text-decoration: none;
  padding: 10px;
  cursor: pointer;

  :hover { color: ${theme.colors.primary}; }

  ${media.sm`
    :first-child { margin-left: -10px; }
  `}
`;

const SocialMedia = styled.div``;

SocialMedia.Item = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  transition: transform .3s ease;
  
  ${media.sm`
    margin-top: 0;
    :last-child { margin-right: -20px; }
  `}
  
  svg {
    width: 25px;
    height: 25px; 

    path { transition: fill .3s ease; }
  }

  :hover {
    svg path { fill: ${theme.colors.primary}; }
  } 
`;

export { Header, Menu, SocialMedia };