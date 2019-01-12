import React, { Fragment } from 'react';

import Head from './../../components/Head';
import { getProjects } from './../../services/projects';
import { ProjectsContainer, ProjectsItem } from './ProjectsStyles';

const Project = ({ project }) => (
  <ProjectsItem href={project.link} target="_blank" rel="noopener nofollow">
    <ProjectsItem.ImageWrapper gradient={project.gradient}>
      <ProjectsItem.Image src={`/static/${project.image}`} alt={project.name} />
    </ProjectsItem.ImageWrapper>
    
    <ProjectsItem.Title>
      {project.name}
    </ProjectsItem.Title>

    <ProjectsItem.Type>
      {project.type} {!project.online && (<span> - Currently offline</span>)}
    </ProjectsItem.Type>

    <ProjectsItem.Stack>
      {project.stack && project.stack.join(" - ")}
    </ProjectsItem.Stack>
  </ProjectsItem>
);

const Projects = ({ projects }) => (
  <Fragment>
    <Head title="Projects" />

    <ProjectsContainer>
      <ProjectsContainer.Title>Projects</ProjectsContainer.Title>

      <ProjectsContainer.List>
        {projects.map((project, index) => (
          <ProjectsContainer.List_Item key={index}>
            <Project project={project} />
          </ProjectsContainer.List_Item>
        ))}

        {/* To fix flexbox bug on last row */}
        <ProjectsContainer.List_Item style={{marginBottom: '0'}} key={projects.length + 1}></ProjectsContainer.List_Item>
        <ProjectsContainer.List_Item style={{marginBottom: '0'}} key={projects.length + 2}></ProjectsContainer.List_Item>
      </ProjectsContainer.List>
    </ProjectsContainer>
  </Fragment>
);

Projects.getInitialProps = async function () {
  const projects = await getProjects();
  return { projects };
};

export default Projects;
