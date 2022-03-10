import "./../styles/globals.css";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import Script from "next/script";
import Head from "next/head";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

dayjs.locale("pt-br");

const GA_TRACKING_ID = "";

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Gabriel Lima" />
      </Head>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
