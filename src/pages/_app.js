import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider as StoreProvider } from 'react-redux';
import App, { Container } from 'next/app';

import { onServer } from 'utils/on-server';
import { AppLifecycle } from 'mechanisms/app-lifecycle';
import { PageLifecycle } from 'mechanisms/page-lifecycle';

import '../assets/css/main.scss';

class CustomApp extends App {
  static async getInitialProps(appContext) {
    const { Component: Page, ctx: pageContext, router } = appContext;

    const appLifecycle = AppLifecycle.for(router, pageContext);
    await appLifecycle.loadDependencies();

    const pageLifecycle = PageLifecycle.for(Page, appLifecycle.dependencies, router);
    const pageProps = await pageLifecycle.loadData();

    return {
      pageProps,
      appProps: appLifecycle.serializeDependencies(),
      appLifecycle: onServer() ? appLifecycle : null,
    };
  }

  constructor(props) {
    super(props);

    this._appLifecycle = AppLifecycle.fromInitialProps(props);
    this.state = {
      // eslint-disable-next-line no-underscore-dangle
      dependencies: this._appLifecycle.dependencies,
    };
  }

  // NOTE: this guy is called only on the client.
  // On the client we want to make sure that all dependencies are loaded,
  // including those which can't be restored from serialized props,
  // or their loading can be only asynchronous.
  async componentDidMount() {
    const { Component: Page, router } = this.props;

    await this._appLifecycle.loadDependencies();
    const { dependencies } = this._appLifecycle;

    this.setState({ dependencies });

    const pageLifecycle = PageLifecycle.for(Page, dependencies, router);
    await pageLifecycle.loadClientOnlyData();
  }

  render() {
    // Since we trigger deps loading from componentDidMount and
    // render gets called first, we need this hack to load every dependency
    // before the first render. At the end it looks like this:
    // 1. App gets rendered on server side and render method kicks off
    // 2. Since this._appLifecycle._allDependenciesLoaded is true we provide
    // server side rendered html to the client via dangerouslySetInnerHTML
    // 3. componentDidMount kicks off, loading client dependencies,
    // calling setState, and setting this._appLifecycle._allDependenciesLoaded
    // to false
    // 4. render gets called again, now with every required dependency loaded
    if (!this._appLifecycle._allDependenciesLoaded) {
      // eslint-disable-next-line no-underscore-dangle
      const __html = document.querySelector('#__next > div').innerHTML;
      return <div dangerouslySetInnerHTML={{ __html }} />;
    }

    const { Component: Page, pageProps } = this.props;
    const { locale, messages, store } = this.state.dependencies;

    return (
      <Container>
        <IntlProvider locale={locale} messages={messages}>
          <StoreProvider store={store}>
            <Page {...pageProps} />
          </StoreProvider>
        </IntlProvider>
      </Container>
    );
  }
}

export default CustomApp;
