import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../../../logic/root-reducer';
import { sagaCaller } from '../../../services/redux/saga-caller';

export function buildServerSideStore(sagaContext) {
  const initialState = undefined;

  // NOTE: We need saga middleware on the server to be able to execute
  // generator functions as part of the SSR. Also note that this saga
  // middleware is idle (we don't run the root saga on the server).
  // This is done to make sure there's no event-driven logic on the server.
  const sagaMiddleware = createSagaMiddleware({
    context: sagaContext,
  });
  const storeEnhancer = applyMiddleware(sagaMiddleware);

  const store = createStore(rootReducer, initialState, storeEnhancer);
  store.callSaga = sagaCaller(sagaMiddleware);

  return store;
}
