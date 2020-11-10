import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../../../logic/root-reducer';
import { rootSaga } from '../../../logic/root-saga';
import { sagaCaller } from '../../../services/redux/saga-caller';

export function buildClientSideStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const storeEnhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, initialState, storeEnhancer);
  store.callSaga = sagaCaller(sagaMiddleware);
  store.callSaga(rootSaga); // TODO: pass a saga context
  return store;
}
