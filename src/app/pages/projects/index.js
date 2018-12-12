import React, { Component } from 'react';
import Link from 'next/link';
import './projects.scss';

import Page from './../../components/page';
import { getProjects } from './../../services/projects';
import { formatDate } from './../../services/utils';

const Projects = ({ projects }) => (
  <Page meta={{ title: 'Projects' }}>
    <div>
      <section className="section">
        <h1 className="section__title h2">All Projects</h1>
      </section>

      <section className="section projects">
        {projects.map((project, index) => (
          <a className="card projects__item" href={ project.link } target="_blank" rel="noopener nofollow" key={index}>
            <img src={`/static/${project.image}`} alt={ project.name } />

            <h3 className="h4">{ project.name }</h3>

            <p className="projects__item__type">
              { project.type }
              {!project.online ? <span> - Currently offline</span> : ''}
            </p>

            <p>{ project.technologies.join(" - ") }</p>
          </a>
        ))}
      </section>
    </div>
  </Page>
);

Projects.getInitialProps = async function () {
  const projects = await getProjects();

  return { projects };
};

export default Projects;
