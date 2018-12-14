import styled from 'styled-components';
import media from '../../styles/utils/media';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  
  ${media.sm`justify-content: space-between;`}
`;

const Menu = styled.div`
  display: block;
`;

Menu.Item = styled.div``;

const SocialMedia = styled.div``;

SocialMedia.Item = styled.div``;

export { Header, Menu, SocialMedia };