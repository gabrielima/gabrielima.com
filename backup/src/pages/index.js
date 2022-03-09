import React from 'react';

import { getPersonalInfo } from './../services/personal-info';
import { getPosts } from './../services/posts';
import { getProjects } from './../services/projects';
import Home from './home';

/* Renders the Home page */
const Index = (props) => <Home {...props} />;

Index.getInitialProps = async function () {
  const personal_info = await getPersonalInfo();
  const posts = await getPosts();
  let projects = await getProjects();

  projects = projects.slice(0, 6);

  return {
    personal_info,
    projects,
    posts
  }
};

export default Index;
