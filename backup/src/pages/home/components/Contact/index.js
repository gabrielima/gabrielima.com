import React from 'react';

import HomeSection from '../../HomeStyles';
import ContactContainer from './ContactStyles';

const Contact = ({ email }) => (
  <HomeSection>
    <HomeSection.Title>Contact</HomeSection.Title>

    <ContactContainer.Link href={`mailto:${email}`}>
      { email }
    </ContactContainer.Link>
  </HomeSection>
);

export default Contact;
