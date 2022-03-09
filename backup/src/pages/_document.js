import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// import { GA_TRACKING_ID } from '../services/gtag';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
    })

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] }
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          /> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}}
          />           */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}