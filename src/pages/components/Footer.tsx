import FooterContainer from './../../styles/components/FooterStyles';

const year = (new Date()).getFullYear();

const Footer = () => (
  <FooterContainer>
    <FooterContainer.Copy>
      Made with <FooterContainer.Heart>❤</FooterContainer.Heart> in Brazil.
    </FooterContainer.Copy>

    <FooterContainer.Copy>
      Built with NextJS and styled-components
    </FooterContainer.Copy>

    <FooterContainer.Copy>
      Copyright { year } - Gabriel Lima
    </FooterContainer.Copy>
  </FooterContainer>
);

export default Footer;
