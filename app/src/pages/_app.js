import App, { Container } from 'next/app';
import Router from 'next/router';
import React from 'react';

import Root from '../styles/blocks/Root';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import * as gtag from '../misc/gtag';

// Router.events.on('routeChangeComplete', url => gtag.pageview(url));

const Layout = props => (
  <Root>
    <Nav />
    <main>
      {props.children}
    </main>
    <Footer />
  </Root>
);


export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
