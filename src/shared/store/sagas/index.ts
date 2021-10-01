import { all, fork } from 'redux-saga/effects';
import categories from '~/modules/Categories/store/ducks/sagas';
import questions from '~/modules/Questions/store/ducks/sagas';

export default function* rootSaga() {
  yield all([fork(categories), fork(questions)]);
}
