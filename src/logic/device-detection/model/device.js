import { MAC } from './data/operating-systems';
import { MOBILE } from './data/device-types';

const isRetinaScreen = (deviceType, osName) =>
  (Boolean(osName) && osName === MAC) || deviceType === MOBILE;

export class Device {
  static create({ type, isBot, osName, osVersion = null }) {
    return {
      type,
      isBot,
      osName,
      osVersion,
      isRetinaScreen: isRetinaScreen(type, osName),
    };
  }

  static createEmpty() {
    return this.create({
      type: '',
      isBot: false,
      osName: '',
      osVersion: '',
      isRetinaScreen: false,
    });
  }
}
