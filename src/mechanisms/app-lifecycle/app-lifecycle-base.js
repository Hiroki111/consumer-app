export class AppLifecycleBase {
  constructor() {
    this._dependencies = {};
    this._allDependenciesLoaded = false;
  }

  get dependencies() {
    return this._dependencies;
  }

  addDependencies(deps = {}) {
    this._dependencies = { ...this._dependencies, ...deps };
    return this;
  }

  async loadDependencies() {}

  serializeDependencies() {}
}
