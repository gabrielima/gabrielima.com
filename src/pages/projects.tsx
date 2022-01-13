import Head from './components/CustomHead';
import { getProjects } from './../services/projects';
import { ProjectsContainer, ProjectsItem } from './../styles/pages/ProjectsStyles';
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';

const Project = ({ project }: any) => (
  <ProjectsItem href={project.link} target="_blank" rel="noopener nofollow">
    <ProjectsItem.ImageWrapper gradient={project.gradient}>
      <ProjectsItem.Image src={`${project.image}`} alt={project.name} />
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

const Projects: NextPage = ({ projects }: any) => (
  <>
    <Head title="Projects" />

    <ProjectsContainer>
      <ProjectsContainer.Title>Projects</ProjectsContainer.Title>

      <ProjectsContainer.List>
        {projects.map((project: any, index: number) => (
          <ProjectsContainer.List_Item key={index}>
            <Project project={project} />
          </ProjectsContainer.List_Item>
        ))}

        {/* To fix flexbox bug on last row */}
        <ProjectsContainer.List_Item style={{marginBottom: '0'}} key={projects.length + 1}></ProjectsContainer.List_Item>
        <ProjectsContainer.List_Item style={{marginBottom: '0'}} key={projects.length + 2}></ProjectsContainer.List_Item>
      </ProjectsContainer.List>
    </ProjectsContainer>
  </>
);

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const projects = await getProjects();
  return { props: { projects } };
};

export default Projects;
