import React from 'react';
import Home from './home';

import { getPosts } from './../services/posts';
import { getProjects } from './../services/projects';
import { getPersonalInfo } from './../services/personal-info';

const Index = (props) => <Home {...props}/>;

Index.getInitialProps = async function () {
  const personal_info = await getPersonalInfo();
  const posts = await getPosts();
  let projects = await getProjects();

  projects = projects.splice(0, 7);

  return {
    personal_info,
    projects,
    posts
  }
};

export default Index;
