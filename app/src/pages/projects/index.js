import React, { Fragment } from 'react';

import Head from './../../components/Head';
import { getProjects } from './../../services/projects';

const Project = ({ project }) => (
  <a href={project.link} target="_blank" rel="noopener nofollow">
    <img src={`/static/${project.image}`} alt={project.name} />
    <h3>{project.name}</h3>
    <p>{project.type} {!project.online && (<span> - Currently offline</span>)}</p>
    <p>{project.technologies.join(" - ")}</p>
  </a>
);

const Projects = ({ projects }) => (
  <Fragment>
    <Head title="Projects" />

    <section>
      <h1>Projects</h1>
      {projects.map((project, index) => <Project key={index} project={project} />)}
    </section>
  </Fragment>
);

Projects.getInitialProps = async function () {
  const projects = await getProjects();

  return { projects };
};

export default Projects;
