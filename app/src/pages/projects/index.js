import React, { Fragment } from 'react';

import Head from './../../components/head';
import { getProjects } from './../../services/projects';

const Projects = ({ projects }) => (
  <Fragment>
    <Head title="Projects" />

    <section>
      <h1>All Projects</h1>
    </section>

    <section>
      {projects.map((project, index) => (
        <a href={ project.link } target="_blank" rel="noopener nofollow" key={index}>
          <img src={`/static/${project.image}`} alt={ project.name } />
          <h3>{ project.name }</h3>
          <p>{ project.type } {!project.online && (<span> - Currently offline</span>)}</p>
          <p>{ project.technologies.join(" - ") }</p>
        </a>
      ))}
    </section>
  </Fragment>
);

Projects.getInitialProps = async function () {
  const projects = await getProjects();

  return { projects };
};

export default Projects;
