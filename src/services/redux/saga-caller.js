import { call } from 'redux-saga/effects';

function* callSafely(func, args = []) {
  try {
    const result = yield call(func, ...args);
    return { error: null, result };
  } catch (e) {
    return { error: e, result: null };
  }
}

export function sagaCaller(sagaMiddleware) {
  return async function callSaga(sagaFunction, ...sagaArguments) {
    const task = sagaMiddleware.run(callSafely, sagaFunction, sagaArguments);
    const { error, result } = await task.toPromise();

    if (error) {
      throw error;
    } else {
      return result;
    }
  };
}
