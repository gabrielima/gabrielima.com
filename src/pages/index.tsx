
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Head from './components/CustomHead';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import Hero from './components/Home/Hero';
import Projects from './components/Home/Projects';
import Skills from './components/Home/Skills';

const Home: NextPage = ({ personal_info, projects, posts }: any) => (
  <>
    <Head />
    <Hero />
    <About bio={personal_info.bio} />
    <Projects projects={projects} />
    <Skills skills={personal_info.skills} />
    {/* <Posts posts={posts} /> */}
    <Contact email={personal_info.email} />
  </>
);

export default Home;

export const getStaticProps: GetStaticProps = (context: GetStaticPropsContext) => {
  const personal_info: any = {};
  const projects: any = [];
  const posts: any = [];

  return {
    props: { personal_info, projects, posts }
  }
};
