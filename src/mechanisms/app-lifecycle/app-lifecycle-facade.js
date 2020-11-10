import { ClientAppLifecycle } from './client/client-app-lifecycle';
import { ServerAppLifecycle } from './server/server-app-lifecycle';
import { onServer } from '../../utils/on-server';

const CLIENT_LIFECYCLE_KEY = '__NEXT_APP_LIFECYCLE__';

export const AppLifecycleFacade = {
  for(router, pageContext) {
    if (onServer()) {
      const { req } = pageContext;
      const lifecycle = ServerAppLifecycle.build(router, pageContext);
      return (req.appLifecycle = lifecycle);
    } else {
      if (window[CLIENT_LIFECYCLE_KEY]) {
        return window[CLIENT_LIFECYCLE_KEY];
      }

      const msg = `Lifecycle instance is missing in window['${CLIENT_LIFECYCLE_KEY}']`;
      throw new Error(msg);
    }
  },

  fromInitialProps({ router, appProps, appLifecycle }) {
    if (onServer()) {
      return appLifecycle;
    } else {
      const lifecycle = ClientAppLifecycle.restore(router, appProps);
      return (window[CLIENT_LIFECYCLE_KEY] = lifecycle);
    }
  },
};
