import { AppLifecycleBase } from '../app-lifecycle-base';
import { buildServerSideStore } from '../../redux/server/build-store';
import networkInterfaceFactory from '../../network/server-network-interface-factory';

function nonSerializableToJSON(obj) {
  const properties = Object.keys(obj);

  properties.map(name =>
    Object.defineProperty(obj, name, {
      enumerable: false,
    }),
  );

  return obj;
}

export class ServerAppLifecycle extends AppLifecycleBase {
  /**
   * Creates an instance with pre-filled initial dependencies.
   */
  static build(router, pageContext) {
    const { req, res } = pageContext;
    const { locale, messages } = req;
    const network = networkInterfaceFactory();

    const lifecycle = new ServerAppLifecycle().addDependencies({
      locale,
      messages,
      res,
      network,
    });

    return nonSerializableToJSON(lifecycle);
  }

  /**
   * Loads additional dependencies.
   */
  async loadDependencies() {
    if (this._allDependenciesLoaded) {
      return;
    }

    const store = buildServerSideStore();
    this.addDependencies({ store });

    this._allDependenciesLoaded = true;
  }

  /**
   * Returns a plain JS object of serialized dependencies.
   * We use this object on the client to restore client-side lifecycle from it.
   * See https://en.wikipedia.org/wiki/Memento_pattern
   */
  serializeDependencies() {
    const { locale, messages, store, network } = this._dependencies;
    return {
      locale,
      messages,
      preloadedState: store.getState(),
      network,
    };
  }
}
