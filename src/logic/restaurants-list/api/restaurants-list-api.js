import { call, putResolve } from 'redux-saga/effects';

import { restaurantsListFetchHandler } from '../sagas/restaurant-list';

export default class RestaurantsListApi {
  static *fetchUniversalData() {
    return yield call(restaurantsListFetchHandler);
  }
}
