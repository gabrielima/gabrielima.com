import Image from "next/image";
import section from "./../../styles/section";

const styles = {
  about: "bg-slate-50",
  bio: "flex lg:items-center flex-col lg:flex-row",
  bioImageWrapper: "max-w-[200px] lg:max-w-full lg:w-full",
  bioImage: " rounded-md",
  bioText: "lg:pl-5 text-md md:text-lg",
};
const About = ({ bio }: any) => (
  <section id="about" className={styles.about}>
    <div className={section.container}>
      <h3 className={section.title}>
        About
        <span className={section.titleUnderline}></span>
      </h3>

      <div className={styles.bio}>
        <div className={styles.bioImageWrapper}>
          <Image
            className={styles.bioImage}
            src="/gabrielima.jpg"
            width={274}
            height={294}
            alt="Gabriel Lima"
          />
        </div>
        <div className={styles.bioText}>{bio}</div>
      </div>
    </div>
  </section>
);

export default About;
