import React, { Component } from 'react';
import Page from './../../components/page';

import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Posts from './components/posts';
import Contact from './components/contact';

const Home = ({ personal_info, projects, posts }) => (
  <Page>
    <Hero />
    <About bio={personal_info.bio} />
    <Projects projects={projects} />
    <Skills skills={personal_info.skills} />
    <Posts posts={posts} />
    <Contact email={personal_info.email} />
  </Page>
);

export default Home;
