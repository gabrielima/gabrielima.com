import type { NextPage } from "next";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Posts from "../components/Home/Posts";
import Projects from "../components/Home/Projects";
import Skills from "../components/Home/Skills";
import Meta from "../components/Meta";

import personalInfo from "../data/personal-info.json";
import projects from "../data/projects.json";

const Home: NextPage = ({ personalInfo, projects }: any) => {
  return (
    <>
      <Meta />

      <Hero />
      <About bio={personalInfo.bio} />
      <Projects />
      <Skills />
      <Posts />
      <Contact />
    </>
  );
};

export default Home;

export function getStaticProps() {
  return {
    props: { personalInfo, projects },
    revalidate: 5000,
  };
}
