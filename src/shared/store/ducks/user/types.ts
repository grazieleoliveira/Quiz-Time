import { Action } from 'redux';

export enum UserTypes {
  WRONG_QUESTIONS_STREAK = '@user/WRONG_QUESTIONS_STREAK',
  RIGHT_QUESTIONS_STREAK = '@user/RIGHT_QUESTIONS_STREAK',
  EASY_RIGHT_QUESTIONS = '@user/EASY_RIGHT_QUESTIONS_STREAK',
  EASY_WRONG_QUESTIONS = '@user/EASY_WRONG_QUESTIONS_STREAK',
  MEDIUM_RIGHT_QUESTIONS = '@user/MEDIUM_RIGHT_QUESTIONS_STREAK',
  MEDIUM_WRONG_QUESTIONS = '@user/MEDIUM_WRONG_QUESTIONS_STREAK',
  HARD_RIGHT_QUESTIONS = '@user/HARD_RIGHT_QUESTIONS_STREAK',
  HARD_WRONG_QUESTIONS = '@user/HARD_WRONG_QUESTIONS_STREAK',
  SAVE_USER_ANSWER = '@user/SAVE_USER_ANSWER',
  RESET_ANSWER = '@user/RESET_ANSWER',
  RESET_INFO = '@user/RESET_INFO',
}

interface AnswersProps {
  rightAnswers: number;
  wrongAnswers: number;
}

export interface UserState {
  currentAnswer: {
    id: number | undefined;
    answer: string;
  };
  streak: AnswersProps;
  easy: AnswersProps;
  medium: AnswersProps;
  hard: AnswersProps;
}

export interface IncreaseWrongQuestionsStreakProps extends Action {
  type: UserTypes.WRONG_QUESTIONS_STREAK;
  payload: { wrongAnswers: number };
}

export interface IncreaseRightQuestionsStreakProps extends Action {
  type: UserTypes.RIGHT_QUESTIONS_STREAK;
  payload: { rightAnswers: number };
}

export interface IncreaseEasyRightQuestionsProps extends Action {
  type: UserTypes.EASY_RIGHT_QUESTIONS;
  payload: { rightAnswers: number };
}

export interface IncreaseEasyWrongQuestionsProps extends Action {
  type: UserTypes.EASY_WRONG_QUESTIONS;
  payload: { wrongAnswers: number };
}

export interface IncreaseMediumRightQuestionsProps extends Action {
  type: UserTypes.MEDIUM_RIGHT_QUESTIONS;
  payload: { rightAnswers: number };
}

export interface IncreaseMediumWrongQuestionsProps extends Action {
  type: UserTypes.MEDIUM_WRONG_QUESTIONS;
  payload: { wrongAnswers: number };
}

export interface IncreaseHardRightQuestionsProps extends Action {
  type: UserTypes.HARD_RIGHT_QUESTIONS;
  payload: { rightAnswers: number };
}

export interface IncreaseHardWrongQuestionsProps extends Action {
  type: UserTypes.HARD_WRONG_QUESTIONS;
  payload: { wrongAnswers: number };
}

export interface ResetInfoProps extends Action {
  type: UserTypes.RESET_INFO;
}

export interface ResetAnswerProps extends Action {
  type: UserTypes.RESET_ANSWER;
}

export interface SaveUserAnswerProps extends Action {
  type: UserTypes.SAVE_USER_ANSWER;
  payload: { answer: string };
}
