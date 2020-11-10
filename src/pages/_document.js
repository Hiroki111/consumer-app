import { Fragment } from 'react';
import flush from 'styled-jsx/server';
import Document, { Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  static async getInitialProps(context) {
    const originalRenderPage = context.renderPage;

    context.renderPage = () => originalRenderPage();

    const props = await super.getInitialProps(context);
    const {
      req: { locale },
    } = context;

    return {
      ...props,
      locale,
      styles: <Fragment>{flush() || null}</Fragment>,
    };
  }

  // fixme: serve certain files from root
  // serving from src/public will be implemented in one of the upcoming releases
  // https://github.com/zeit/next.js/pull/7213

  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/root/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/root/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/root/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/root/favicon-16x16.png" />
          <link rel="manifest" href="/static/root/site.webmanifest" />
          <link rel="mask-icon" href="/static/root/safari-pinned-tab.svg" color="#ff8000" />
          <meta name="msapplication-TileColor" content="#ff8000" />
          <meta name="theme-color" content="#ff8000" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body onTouchStart="" id="root">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
