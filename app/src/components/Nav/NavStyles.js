import styled from 'styled-components';
import media from '../../styles/utils/media';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  
  ${media.sm`justify-content: space-between;`}
`;

const Menu = styled.nav`
  display: block;
`;

Menu.Item = styled.a``;

const SocialMedia = styled.div``;

SocialMedia.Item = styled.a``;

export { Header, Menu, SocialMedia };