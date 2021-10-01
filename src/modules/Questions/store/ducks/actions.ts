import { action } from 'typesafe-actions';
import { QuestionsProps } from '~/dtos';
import {
  QuestionsTypes,
  GetQuestionsProps,
  GetQuestionsSuccessProps,
  GetQuestionsErrorProps,
} from './types';

export const getQuestionsAction = (id: string): GetQuestionsProps =>
  action(QuestionsTypes.GET_QUESTIONS, { id });

export const getQuestionsSuccessAction = (
  listQuestions: QuestionsProps,
): GetQuestionsSuccessProps =>
  action(QuestionsTypes.GET_QUESTIONS_SUCCESS, { listQuestions });

export const getQuestionsErrorAction = (): GetQuestionsErrorProps =>
  action(QuestionsTypes.GET_QUESTIONS_ERROR);
