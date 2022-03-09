import styled from 'styled-components';
import media from '../../../../styles/utils/media';
import theme from '../../../../styles/theme';

const HeroContainer = styled.div`
  text-align: center;
  padding: 1rem 1rem;

  ${media.sm`padding: 3rem 1rem;`}
`;

HeroContainer.Title = styled.h1`
  margin: 1rem;
  font-size: 3rem;
  ${media.sm`font-size: 4rem;`}
`;

HeroContainer.Subtitle = styled.h1`
  font-size: 1.2rem;
  ${media.sm`font-size: 2rem;`}  
`;

export default HeroContainer;