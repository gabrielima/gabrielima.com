import App, { Container } from 'next/app';
import Router from 'next/router';
import React from 'react';

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import * as gtag from '../utils/gtag';

// Router.events.on('routeChangeComplete', url => gtag.pageview(url));

const Layout = props => (
  <div>
    <Nav />
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
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
