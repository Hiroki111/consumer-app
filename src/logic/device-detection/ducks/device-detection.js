import { get } from 'lodash';

import { actionType } from './action-type';
import { Device } from '../model/device';
import { Browser } from '../model/browser';

// -------------------------------------------------------------------------------------------------
// Action types
// -------------------------------------------------------------------------------------------------

export const DEVICE_INFO_DETECTED = actionType('DEVICE_INFO_DETECTED');

export const BROWSER_INFO_UPDATED = actionType('BROWSER_INFO_UPDATED');

// -------------------------------------------------------------------------------------------------
// Reducer
// -------------------------------------------------------------------------------------------------

export const initialState = {
  browser: Browser.createEmpty(),
  device: Device.createEmpty(),
};

export function deviceDetectionReducer(state = initialState, action) {
  switch (action.type) {
    case DEVICE_INFO_DETECTED: {
      return {
        browser: action.payload.browser,
        device: action.payload.device,
      };
    }

    case BROWSER_INFO_UPDATED:
      return {
        ...state,
        browser: Browser.create(state.browser),
      };

    default:
      return state;
  }
}

// -------------------------------------------------------------------------------------------------
// Action creators
// -------------------------------------------------------------------------------------------------

export function deviceInfoDetected({ browser, device }) {
  return {
    type: DEVICE_INFO_DETECTED,
    payload: { browser, device },
  };
}

export function browserInfoUpdated() {
  return {
    type: BROWSER_INFO_UPDATED,
  };
}

// -------------------------------------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------------------------------------

const rootSelector = state => get(state, 'browserDetection', initialState);

export const browserInfoSelector = state => rootSelector(state).browser;
export const browserCapabilitiesSelector = state => browserInfoSelector(state).capabilities;
export const isImageLazyLoadingSupportedSelector = state =>
  browserCapabilitiesSelector(state).isImageLazyLoadingSupported;
export const deviceInfoSelector = state => rootSelector(state).device;
export const deviceTypeSelector = state => deviceInfoSelector(state).type;
export const isRetinaScreenSelector = state => deviceInfoSelector(state).isRetinaScreen;
