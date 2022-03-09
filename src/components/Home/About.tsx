import Image from "next/image";
import section from "./../../styles/section";

const styles = {
  container:
    "max-w-5xl mx-auto lg:w-full pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",
  bio: "flex items-center mt-12 flex-col lg:flex-row",
  bioImage: "w-full",
  bioText: "lg:pl-5 text-lg",
};
const About = ({ bio }: any) => (
  <div className={styles.container}>
    <h3 className={section.title}>
      About
      <span className={section.titleUnderline}></span>
    </h3>

    <div className={styles.bio}>
      <div className={styles.bioImage}>
        <Image src="/gabrielima.jpg" width={274} height={294} alt="Gabriel Lima" />
      </div>
      <div className={styles.bioText}>{bio}</div>
    </div>
  </div>
);

export default About;
