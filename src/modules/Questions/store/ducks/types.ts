import { Action } from 'redux';
import { QuestionsProps } from '~/dtos';

export enum QuestionsTypes {
  GET_QUESTIONS = '@questions/GET_QUESTIONS',
  GET_QUESTIONS_SUCCESS = '@questions/GET_QUESTIONS_SUCCESS',
  GET_QUESTIONS_ERROR = '@questions/GET_QUESTIONS_ERROR',
  RESET_QUESTIONS = '@questions/RESET_QUESTIONS',
}

export interface QuestionsState {
  listQuestions: [];
  loading: boolean;
}

export interface GetQuestionsProps extends Action {
  type: QuestionsTypes.GET_QUESTIONS;
  payload: { id: string };
}

export interface GetQuestionsSuccessProps extends Action {
  type: QuestionsTypes.GET_QUESTIONS_SUCCESS;
  payload: { listQuestions: QuestionsProps };
}

export interface GetQuestionsErrorProps extends Action {
  type: QuestionsTypes.GET_QUESTIONS_ERROR;
}

export interface ResetQuestionsProps extends Action {
  type: QuestionsTypes.RESET_QUESTIONS;
}
