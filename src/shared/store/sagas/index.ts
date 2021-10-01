import { all, fork } from 'redux-saga/effects';
import categories from '~/modules/Categories/store/ducks/sagas';

export default function* rootSaga() {
  yield all([fork(categories)]);
}
