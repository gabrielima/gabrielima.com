import Image from "next/image";
import React from "react";

const styles = {
  item: "flex flex-col text-center px-4 py-3 bg-white rounded-md shadow-md",
  itemDisabled: "pointer-events-none",
  imgWrapper: "bg-gradient-to-b",
  img: "w-70%",
  title: "mt-3 text-lg",
  stack: "mt-3 text-sm text-gray-600",
};

const ProjectCard = ({ project }: any) => (
  <a
    href={project.link}
    className={`${styles.item} ${!project.link && styles.itemDisabled}`}
    target="_blank"
    rel="noopener nofollow">
    <div className={`${styles.imgWrapper} from-[${project.gradient[0]}] to-[${project.gradient[1]}]`}>
      <Image width={250} height={190} src={project.image} alt={project.name} className={styles.img} />
    </div>
    <span className={styles.title}>{project.name}</span>
    <span className={styles.stack}>{project.stack.join(" - ")}</span>
  </a>
);

export default ProjectCard;
