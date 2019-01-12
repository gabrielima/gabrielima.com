import React, { Fragment } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
// import Posts from './components/Posts';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Head from '../../components/Head';

const Home = ({ personal_info, projects, posts }) => (
  <Fragment>
    <Head />
    <Hero />
    <About bio={personal_info.bio} />
    <Projects projects={projects} />
    <Skills skills={personal_info.skills} />
    {/* <Posts posts={posts} /> */}
    <Contact email={personal_info.email} />
  </Fragment>
);

export default Home;
