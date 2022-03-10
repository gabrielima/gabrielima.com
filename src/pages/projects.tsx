import Meta from "../components/Meta";
import ProjectCard from "../components/ProjectCard";
import allProjects from "../data/projects.json";
import page from "../styles/page";

const styles = {
  projects: "bg-sky-50 px-8 py-10 lg:py-16",
  container: "max-w-7xl mx-auto w-full",
  list: "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
};

const projects = ({ projects }: any) => (
  <>
    <Meta title="Projects | Gabriel Lima" />

    <div className={page.hero}>
      <h1 className={page.title}>Projects</h1>
    </div>

    <div className={styles.container}>
      <div className={styles.projects}>
        <div className={styles.list}>
          {projects.map((project: any, index: number) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default projects;

export function getStaticProps() {
  return {
    props: { projects: allProjects },
    revalidate: 5000,
  };
}
