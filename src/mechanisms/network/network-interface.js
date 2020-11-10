// Network interface emulation

export default class NetworkInterface {
  constructor() {
    this.interfacesList = {};
  }

  plug(Interface) {
    const interfaceInstance = new Interface();

    if (!interfaceInstance.name) {
      throw new Error('Network Interface. Error during plugging a new Interface. No Interface name specified.');
    }
    this.interfacesList[interfaceInstance.name] = interfaceInstance;
  }

  getInterfaces() {
    return { ...this.interfacesList };
  }
}
