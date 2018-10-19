import React from 'react';
import Head from './head';
import Nav from './nav';
import Footer from './footer';
import './../static/sass/main.scss';

const Page = ({ children, meta }) => (
  <div className="root">
    <Head {...meta}/>
    <Nav />

    <main>
      { children }
    </main>

    <Footer />

    {/* <script>
        window.ga=window.ga||function(){(ga.q = ga.q || []).push(arguments)};
        ga('create', 'UA-43874531-1', 'auto');
        ga('send', 'pageview');
    </script>
    <script async src="https://www.google-analytics.com/analytics.js"></script> */}

    <style jsx>{`
    :global(#__next) { height: 100%; }

    .root {
      display: flex;
      flex-direction: column;
      min-height: 100%;
    }

    main {
      flex: 1;
    }
  `}</style>
  </div>
);

export default Page;
