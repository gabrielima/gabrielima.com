import Link from "next/link";
import section from "../../styles/section";
import ProjectCard from "../ProjectCard";
import { AiOutlinePlus } from "react-icons/ai";

const styles = {
  projects: "bg-sky-50",
  list: "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
};

const Projects = ({ projects }: any) => (
  <section id="projects" className={styles.projects}>
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

      <div className={section.moreButtonWrapper}>
        <Link href="/projects" passHref>
          <a className={section.moreButton}>
            <span className="mr-2">More Projects</span>
            <AiOutlinePlus />
          </a>
        </Link>
      </div>
    </div>
  </section>
);

export default Projects;
