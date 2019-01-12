import React from 'react';
import FooterContainer from './FooterStyles';

const year = (new Date()).getFullYear();

const Footer = () => (
  <FooterContainer>
    <FooterContainer.Copy>Copyright { year } - Gabriel Lima</FooterContainer.Copy>
  </FooterContainer>
);

export default Footer;
