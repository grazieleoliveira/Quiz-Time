import { Reducer } from 'redux';
import { QuestionsTypes, QuestionsState } from './types';

const INITIAL_STATE: QuestionsState = {
  listQuestions: [],
  loading: false,
};

const reducer: Reducer<QuestionsState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case QuestionsTypes.GET_QUESTIONS:
      return {
        ...state,
        loading: true,
      };
    case QuestionsTypes.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        listQuestions: payload.listCategories,
      };
    case QuestionsTypes.GET_QUESTIONS_ERROR:
      return {
        ...state,
        loading: false,
        listQuestions: [],
      };
    default:
      return state;
  }
};

export default reducer;
