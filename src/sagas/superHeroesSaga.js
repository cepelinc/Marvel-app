import { call, put, takeLatest } from 'redux-saga/effects';
import { apiClient } from '@api';
import {CHARACTERS} from '@constants/serverRoutes';
import { paginate } from '@utils/paginate'

import {
  GET_SUPER_HEROES,
  GET_SINGLE_HERO
} from '@constants/actionTypes/superHeroes';
import {
  getSuperHeroesSuccess,
  getSuperHeroesFail,
  getHeroSuccess,
  getHeroFail,
} from '@actions/superHeroesActions';

function* getSuperHeroesSaga(action) {
  const { limit, offset } = action.data;
  const module = paginate({route: CHARACTERS, limit, offset});
  try {
    const params = {
      module,
      method: 'get',
    };
    const result = yield call(apiClient, params);
    yield put(getSuperHeroesSuccess(result.data.results));
  } catch (err) {
    yield put(getSuperHeroesFail(err));
  }
}
function* getHeroSaga(action) {
  try {
    const params = {
      module: `${CHARACTERS}/${action.id}`,
      method: 'get',
    };
    const result = yield call(apiClient, params);
    yield put(getHeroSuccess(result.data.results[0]));
  } catch (err) {
    yield put(getHeroFail(err));
  }
}
export default function* superHeroesSagas() {
  yield takeLatest(GET_SUPER_HEROES, getSuperHeroesSaga);
  yield takeLatest(GET_SINGLE_HERO, getHeroSaga);
}
