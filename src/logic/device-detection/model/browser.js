export class Browser {
  static create({ name, version }) {
    return {
      name,
      version,
    };
  }

  static createEmpty() {
    return this.create({
      name: '',
      version: '',
    });
  }

  static buildBrowserString({ name = '', version = '' } = {}, osName = '') {
    const browser = name && version ? `${name}-${version}` : name;

    return `${osName} ${browser}`.trim();
  }
}
