import { all } from 'redux-saga/effects';
import { restaurantsListSaga } from './restaurants-list/sagas/restaurant-list';

export function* rootSaga() {
  yield all([restaurantsListSaga()]);
}
