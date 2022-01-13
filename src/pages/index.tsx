
import { NextPage } from 'next';

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
