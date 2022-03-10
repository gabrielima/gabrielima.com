import section from "./../../styles/section";

const styles = {
  skills: "bg-white",
  item: "flex items-center my-6",
  area: "flex basis-[100px] shrink-0 justify-end pr-3",
  list: "flex grow align-center flex-wrap",
  skill:
    "inline-block border border-1 border-gray-800 text-gray-800 text-sm my-1 mr-2 px-2.5 py-0.5 rounded hover:bg-gray-800 hover:text-white cursor-pointer",
};
const Skills = ({ skills }: any) => (
  <section id="Skills" className={styles.skills}>
    <div className={section.container}>
      <h3 className={section.title}>
        Skills
        <span className={section.titleUnderline}></span>
      </h3>

      {skills.map(({ area, skills }: any, index: number) => (
        <div className={styles.item} key={index}>
          <h5 className={styles.area}>{area}</h5>
          <div className={styles.list}>
            {skills.map((skill: any, index: number) => (
              <div className={styles.skill}>{skill}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
