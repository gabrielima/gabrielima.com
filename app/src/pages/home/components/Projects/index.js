import Link from 'next/link';
import React from 'react';

import HomeSection from '../../HomeStyles';
import ProjectsList from './ProjectsStyles';

const Projects = ({ projects }) => (
  <HomeSection>
    <HomeSection.Title>Latest Projects</HomeSection.Title>

    <ProjectsList>
      {projects.map((project, index) => (
        <ProjectsList.Item key={index} href={project.link}>
          <ProjectsList.Item.Img src={`/static/${project.image}`} />
          <ProjectsList.Item.Title>{project.name}</ProjectsList.Item.Title>
        </ProjectsList.Item>
      ))}

      <Link href="projects">
        <a>All Projects +</a>
      </Link>
    </ProjectsList>
  </HomeSection>
);

export default Projects;
