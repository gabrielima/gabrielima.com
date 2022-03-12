import Image from "next/image";
import React from "react";

const styles = {
  card: "flex flex-col text-center px-4 pt-3 pb-4 bg-white rounded-md shadow-md",
  disabled: "pointer-events-none",
  img: "w-70%",
  title: "mt-3 text-lg mr-2",
  stack: "mt-3 text-sm text-gray-600",
  badge: "bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded",
  badgeDanger: "dark:bg-red-200 dark:text-red-900",
  badgeSuccess: "dark:bg-green-200 dark:text-green-900",
};

const ProjectCard = ({ project }: any) => (
  <a
    href={project.link}
    className={`${styles.card} ${!project.online && styles.disabled}`}
    target="_blank"
    rel="noopener nofollow">
    <div>
      <Image
        width={250}
        height={190}
        src={project.image}
        alt={project.name}
        className={styles.img}
      />
    </div>
    <span className={styles.title}>{project.name}</span>
    <div>
      <span
        className={`${styles.badge} ${project.online ? styles.badgeSuccess : styles.badgeDanger}`}>
        {project.online ? "Online" : "Offline"}
      </span>
    </div>
    <span className={styles.stack}>{project.stack.join(" - ")}</span>
  </a>
);

export default ProjectCard;
