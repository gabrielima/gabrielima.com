import styled from 'styled-components';
import Link from 'next/link'

import theme from './../../styles/theme';

const HomeSection = styled.section`
  padding: 30px 0;
`;

HomeSection.Title = styled.h3`
  position: relative;
  display: inline-block;
  font-size: 2rem;

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

HomeSection.Link = styled.a`
  display: inline-block;
  margin: 0 auto;
  color: ${theme.colors.primary};
  border-bottom: 4px solid;
  cursor: pointer;
`;

export default HomeSection;