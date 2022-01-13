import HomeSection from './../../../styles/pages/HomeStyles';
import AboutContainer from './../../../styles/components/Home/AboutStyles';

const About = ({ bio }: any) => (
  <HomeSection>
    <HomeSection.Title>About</HomeSection.Title>

    <AboutContainer>
      <AboutContainer.Child>
        <AboutContainer.Image src="/static/img/gabrielima.jpg" alt="Gabriel Lima" />
      </AboutContainer.Child>

      <AboutContainer.Child>
        <AboutContainer.Bio>
          { bio }
        </AboutContainer.Bio>

        <AboutContainer.Link href="/static/resume.pdf" target="_blank" rel="noopener nofollow">
          Resume
        </AboutContainer.Link>
      </AboutContainer.Child>
    </AboutContainer>
  </HomeSection>
);

export default About;