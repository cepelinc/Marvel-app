/**
 * root saga
 */
import { all, cancel, take, fork } from 'redux-saga/effects';
// sagas
import superHeroesSaga from './superHeroesSaga';

// rootSaga
export default function* rootSaga() {
  // const watcherTasks = [
  //   fork(audit),
  //   fork(auth),
  //   fork(profile),
  //   fork(desk),
  //   fork(dashboard),
  //   fork(exportSaga),
  //   fork(pinUnpin),
  //   fork(missionAssign),
  //   fork(users),
  //   fork(wizard),
  //   fork(sendReports),
  //   fork(expenses),
  //   fork(elements),
  //   fork(general),
  // ];
  yield fork(superHeroesSaga)
}
