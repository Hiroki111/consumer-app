import { takeEvery, put } from 'redux-saga/effects';
import {
  AUTHENTICATION_STARTED,
  authenticationSucceeded,
  authenticationFailed,
} from 'logic/authentication/ducks/authentication';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* authenticationHandler() {
  try {
    yield delay(1000);
    yield put(authenticationSucceeded({ token: 'wkjevbwievb' }));
  } catch (e) {
    console.error(e);
    yield put(authenticationFailed({ error: e }));
  }
}

export function* authenticationSaga() {
  yield takeEvery(AUTHENTICATION_STARTED, authenticationHandler);
}
