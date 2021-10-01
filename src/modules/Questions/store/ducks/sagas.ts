import { all, takeLatest, call, put } from 'redux-saga/effects';
import { getQuestions } from '~/shared/services/questions';
import { getQuestionsSuccessAction, getQuestionsErrorAction } from './actions';

import { GetQuestionsProps, QuestionsTypes } from './types';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* getQuestionsSagas(action: GetQuestionsProps) {
  try {
    const response: ResponseGenerator = yield call(
      getQuestions,
      action.payload.id,
    );

    if (response.status >= 200 && response.status < 300) {
      yield put(getQuestionsSuccessAction(response.data.results));
    } else {
      yield put(getQuestionsErrorAction());
    }
  } catch {
    yield put(getQuestionsErrorAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(QuestionsTypes.GET_QUESTIONS, getQuestionsSagas)]);
}
