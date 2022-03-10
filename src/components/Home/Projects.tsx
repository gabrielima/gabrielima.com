import section from "../../styles/section";
import ProjectCard from "../ProjectCard";

const styles = {
  posts: "bg-gray-50",
  list: "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
};

const Projects = ({ projects }: any) => (
  <section id="posts" className={styles.posts}>
    <div className={section.container}>
      <h3 className={section.title}>
        Projects
        <span className={section.titleUnderline}></span>
      </h3>

      <div className={styles.list}>
        {projects.map((project: any, index: number) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
