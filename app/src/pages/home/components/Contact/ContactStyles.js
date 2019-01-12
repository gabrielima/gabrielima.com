import styled from 'styled-components';

import theme from './../../../../styles/theme';

const ContactContainer = styled.div``;

ContactContainer.Link = styled.a`
  display: block;
  margin: 4rem auto 0;
  width: 90%;
  padding: 0 30px;
  max-width: 350px;
  padding: 15px 0;
  height: auto;
  text-transform: none;
  color: #fff;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-decoration: none;
  background-color: ${theme.colors.primary};
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  font-size: 20px;
  transition: .45s;

  :hover {
    background-color: ${theme.colors.primary_active};
  }
`;

export default ContactContainer;