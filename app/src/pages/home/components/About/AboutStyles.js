import styled from 'styled-components';
import media from './../../../../styles/utils/media';
import theme from './../../../../styles/theme';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${media.sm`
    flex-direction: row;
  `}
`;

AboutContainer.Child = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  :last-child {
    padding: 10px 0;

    ${media.sm`
      padding: 20px;
    `}
  }
`;

AboutContainer.Image = styled.img`
  width: 120px;

  ${media.sm`
    width: 200px;
  `}
`;

AboutContainer.Bio = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 0;
`;

AboutContainer.Link = styled.a`
  display: inline-block;
  padding: 7px 20px;
  border: 1px solid;
  border-radius: 10px;
  text-decoration: none;
  width: 100px;
  color: ${theme.colors.default};
  transition: background-color .4s ease;

  :hover {
    background-color: ${theme.colors.primary};
    color: #fff;
  }
`;

export default AboutContainer;