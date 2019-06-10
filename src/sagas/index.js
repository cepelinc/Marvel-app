/**
 * root saga
 */
import { all, cancel, take, fork } from 'redux-saga/effects';
// sagas
import superHeroesSaga from './superHeroesSaga';

// rootSaga
export default function* rootSaga() {
  yield fork(superHeroesSaga)
}
