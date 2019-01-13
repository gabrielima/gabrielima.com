import Link from 'next/link';
import React from 'react';

import HomeSection from '../../HomeStyles';
import ProjectsList from './ProjectsStyles';

const Projects = ({ projects }) => (
  <HomeSection>
    <HomeSection.Title>Latest Projects</HomeSection.Title>

    <ProjectsList>
      {projects.map((project, index) => (
        <ProjectsList.Item key={index}>
          <ProjectsList.Item_Link 
            href={project.link}
            target="_blank"
            rel="noopener nofollow"
            gradient={project.gradient}
            disabled={!project.online}
          >
            <ProjectsList.Item_Img src={`/static/${project.image}`} alt={project.name}/>
            <ProjectsList.Item_Title>{project.name}</ProjectsList.Item_Title>
          </ProjectsList.Item_Link>
        </ProjectsList.Item>
      ))}
    </ProjectsList>

    <Link href="projects">
      <HomeSection.Link>All Projects +</HomeSection.Link>
    </Link>
  </HomeSection>
);

export default Projects;
