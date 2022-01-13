import HomeSection from './../../../styles/pages/HomeStyles';
import ContactContainer from './../../../styles/components/Home/ContactStyles';

const Contact = ({ email }: any) => (
  <HomeSection>
    <HomeSection.Title>Contact</HomeSection.Title>

    <ContactContainer.Link href={`mailto:${email}`}>
      { email }
    </ContactContainer.Link>
  </HomeSection>
);

export default Contact;