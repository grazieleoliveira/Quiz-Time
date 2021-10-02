import { combineReducers } from 'redux';
import categories from '~/modules/Categories/store/ducks/';
import questions from '~/modules/Questions/store/ducks';
import user from './user';

// import user from './user';

export default combineReducers({ categories, questions, user });
