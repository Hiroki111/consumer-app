import { AppLifecycleBase } from '../app-lifecycle-base';
import { buildClientSideStore } from '../../redux/client/build-store';
import { intlLoader } from '../../l10n/client';
import networkInterfaceFactory from './network-interface-factory';

export class ClientAppLifecycle extends AppLifecycleBase {
  /**
   * Creates an instance with deserialized initial dependencies.
   */
  static restore(router, serializedDependencies) {
    const { locale, messages, preloadedState } = serializedDependencies;
    const network = networkInterfaceFactory();

    return new ClientAppLifecycle().addDependencies({ locale, messages, network }).addDependencies({
      store: buildClientSideStore(preloadedState),
    });
  }

  /**
   * Loads additional dependencies.
   */
  async loadDependencies() {
    if (this._allDependenciesLoaded) {
      return;
    }

    await intlLoader.load(this.dependencies.locale);

    this._allDependenciesLoaded = true;
  }

  /**
   * Returns an empty object. On the client we don't need to serialize them.
   */
  serializeDependencies() {
    return {};
  }
}
