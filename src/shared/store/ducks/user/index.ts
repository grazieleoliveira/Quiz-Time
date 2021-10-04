import { Reducer } from 'redux';
import { UserTypes, UserState } from './types';

const INITIAL_STATE: UserState = {
  currentAnswer: {
    id: undefined,
    answer: '',
  },
  streak: {
    wrongAnswers: 0,
    rightAnswers: 0,
  },
  easy: {
    wrongAnswers: 0,
    rightAnswers: 0,
  },
  medium: {
    wrongAnswers: 0,
    rightAnswers: 0,
  },
  hard: {
    wrongAnswers: 0,
    rightAnswers: 0,
  },
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case UserTypes.RIGHT_QUESTIONS_STREAK:
      return {
        ...state,
        streak: {
          ...state.streak,
          rightAnswers: payload.rightAnswers,
        },
      };
    case UserTypes.WRONG_QUESTIONS_STREAK:
      return {
        ...state,
        streak: {
          ...state.streak,
          wrongAnswers: payload.wrongAnswers,
        },
      };
    case UserTypes.EASY_RIGHT_QUESTIONS:
      return {
        ...state,
        easy: {
          ...state.easy,
          rightAnswers: payload.rightAnswers,
        },
      };
    case UserTypes.EASY_WRONG_QUESTIONS:
      return {
        ...state,
        easy: {
          ...state.easy,
          wrongAnswers: payload.wrongAnswers,
        },
      };
    case UserTypes.MEDIUM_RIGHT_QUESTIONS:
      return {
        ...state,
        medium: {
          ...state.medium,
          rightAnswers: payload.rightAnswers,
        },
      };
    case UserTypes.MEDIUM_WRONG_QUESTIONS:
      return {
        ...state,
        medium: {
          ...state.medium,
          wrongAnswers: payload.wrongAnswers,
        },
      };
    case UserTypes.HARD_RIGHT_QUESTIONS:
      return {
        ...state,
        hard: {
          ...state.hard,
          rightAnswers: payload.rightAnswers,
        },
      };
    case UserTypes.HARD_WRONG_QUESTIONS:
      return {
        ...state,
        hard: {
          ...state.hard,
          wrongAnswers: payload.wrongAnswers,
        },
      };
    case UserTypes.SAVE_USER_ANSWER:
      return {
        ...state,
        answer: payload.answer,
      };
    case UserTypes.RESET_ANSWER:
      return {
        ...state,
        currentAnswer: INITIAL_STATE.currentAnswer,
      };
    case UserTypes.RESET_INFO:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
