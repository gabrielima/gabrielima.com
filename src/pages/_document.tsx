import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link href="/favicon.ico" rel="shortcut icon" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://www.google-analytics.com" />

          <script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                logo: "",
                url: "https://gabrielima.com",
                sameAs: ["https://www.linkedin.com/in/gabrielima"],
              }),
            }}
          />
        </Head>
        <body className="flex flex-col">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
