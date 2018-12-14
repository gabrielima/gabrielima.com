import React from 'react';

import HomeSection from '../../HomeStyles';

const Contact = ({ email }) => (
  <HomeSection>
    <HomeSection>Contact</HomeSection>

    <a href={`mailto:${email}`}>{ email }</a>
  </HomeSection>
);

export default Contact;
