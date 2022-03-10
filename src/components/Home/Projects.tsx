import Image from "next/image";
import section from "../../styles/section";
import classname from "classnames";

const styles = {
  posts: "bg-gray-50",
  list: "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  item: "flex flex-col text-center px-4 py-3 bg-white rounded-md shadow-md",
  itemDisabled: "pointer-events-none",
  imgWrapper: "bg-gradient-to-b",
  img: "w-70%",
  title: "mt-3 text-lg",
  stack: "mt-3 text-sm",
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
          <a
            href={project.link}
            key={index}
            className={`${styles.item} ${!project.link && styles.itemDisabled}`}
            target="_blank"
            rel="noopener nofollow">
            <div
              className={
                //styles.imgWrapper(project.gradient)
                classname(styles.imgWrapper, `from-[${project.gradient[0]}] to-[${project.gradient[1]}]`)
              }>
              <Image width={250} height={190} src={project.image} alt={project.name} className={styles.img} />
            </div>
            <span className={styles.title}>{project.name}</span>
            <span className={styles.stack}>{project.stack.join(" - ")}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
