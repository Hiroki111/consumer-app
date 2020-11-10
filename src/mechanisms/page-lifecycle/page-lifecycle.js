import { LOAD_UNIVERSAL_DATA, LOAD_CLIENT_ONLY_DATA } from './method-names';
import { onServer } from '../../utils/on-server';

export class PageLifecycle {
  static for(PageComponent, dependencies, router) {
    return new PageLifecycle(PageComponent, dependencies, router);
  }

  constructor(PageComponent, dependencies, router) {
    this._pageComponent = PageComponent;
    this._dependencies = dependencies;
    this._router = router;
  }

  async loadData() {
    if (onServer()) {
      return await this.call(LOAD_UNIVERSAL_DATA);
    } else {
      const universalProps = await this.call(LOAD_UNIVERSAL_DATA);
      const clientSideProps = await this.call(LOAD_CLIENT_ONLY_DATA);
      return {
        ...universalProps,
        ...clientSideProps,
      };
    }
  }

  async loadClientOnlyData() {
    return await this.call(LOAD_CLIENT_ONLY_DATA);
  }

  async call(lifecycleMethodName) {
    const method = this._pageComponent[lifecycleMethodName];

    if (typeof method === 'function') {
      const props = await method({
        ...this._dependencies,
        router: this._router,
      });

      return props || {};
    } else {
      return {};
    }
  }
}
