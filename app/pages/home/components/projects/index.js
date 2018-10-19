import React from 'react';
import Link from 'next/link';
import './projects.scss';

const Projects = ({ projects }) => (
  <section className="section projects--home">
    <h2 className="section__title">Latest Projects</h2>

    <div className="projects--home__wrapper">
      {projects.map((project, index) => (
        <a
          href={project.link}
          key={index}
          className="projects--home__item"
          style={{backgroundImage: `url(/static/${project.image})`}}>
          <h4>{project.name}</h4>
        </a>
      ))}

      <Link href="projects">
        <a className="projects--home__all">
          <span className="h4">All Projects +</span>
        </a>
      </Link>
    </div>
  </section>
);

export default Projects;
