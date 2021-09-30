import { all, takeLatest, call, put } from 'redux-saga/effects';
import { getCategories } from '~/shared/services/categories';
import {
  getCategoriesErrorAction,
  getCategoriesSuccessAction,
} from './actions';

import { CategoriesTypes } from './types';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* getCategoriesSagas() {
  try {
    const response: ResponseGenerator = yield call(getCategories);

    if (response.status >= 200 && response.status < 300) {
      yield put(getCategoriesSuccessAction(response.data.trivia_categories));
    } else {
      yield put(getCategoriesErrorAction());
    }
  } catch {
    yield put(getCategoriesErrorAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(CategoriesTypes.GET_CATEGORIES, getCategoriesSagas)]);
}
