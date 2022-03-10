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
import PostService from "../services/PostsService";

const Home: NextPage = ({ personalInfo, projects, posts }: any) => {
  return (
    <>
      <Meta />

      <Hero />
      <About bio={personalInfo.bio} />
      <Projects projects={projects.slice(0, 6)} />
      <Skills skills={personalInfo.skills} />
      <Posts posts={posts} />
      <Contact email={personalInfo.email} />
    </>
  );
};

export default Home;

export function getStaticProps() {
  const posts: any = PostService.getPosts(["title", "createdAt", "slug"], 6);

  return {
    props: { personalInfo, projects, posts },
    revalidate: 5000,
  };
}
