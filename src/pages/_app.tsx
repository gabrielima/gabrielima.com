import type { AppProps } from 'next/app'

import Root from '../styles/blocks/Root';
import Container from '../styles/blocks/Container';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from './components/Footer';
import Nav from './components/Nav';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Container>
      <Root>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </Root>
    </Container>
  </>
);

export default MyApp