import React from 'react';
import './contact.scss';

const Contact = ({ email }) => (
  <section className="section contact" id="contact">
    <h2 className="section__title">Contact</h2>

    <a href={`mailto:${email}`} className="btn contact__email">
      { email }
    </a>
  </section>
);

export default Contact;
