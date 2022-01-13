import styled from "styled-components";
import media from "../../styles/utils/media";
import theme from "../theme";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  padding: 15px 0;

  ${media.sm`
    justify-content: space-between;
    flex-direction: row;
  `}
`;

const Menu = styled.nav`
  display: block;
`;

Menu.Item = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;

  :hover {
    color: ${theme.colors.primary};
  }

  ${media.sm`
    margin-top: 0;
    :first-child { margin-left: -10px; }
  `}
`;

const SocialMedia = styled.div``;

SocialMedia.Item = styled.a`
  display: inline-block;
  padding: 10px 20px;
  transition: transform 0.3s ease;

  ${media.sm`
    :last-child { margin-right: -20px; }
  `}

  svg {
    width: 25px;
    height: 25px;

    path {
      transition: fill 0.3s ease;
    }
  }

  :hover {
    svg path {
      fill: ${theme.colors.primary};
    }
  }
`;

export { Header, Menu, SocialMedia };
