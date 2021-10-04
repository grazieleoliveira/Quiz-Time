import { action } from 'typesafe-actions';
import { QuestionsProps } from '~/dtos';
import {
  QuestionsTypes,
  GetQuestionsProps,
  GetQuestionsSuccessProps,
  GetQuestionsErrorProps,
  ResetQuestionsProps,
} from './types';

export const getQuestionsAction = (
  id: string,
  difficulty: string,
): GetQuestionsProps =>
  action(QuestionsTypes.GET_QUESTIONS, { id, difficulty });

export const getQuestionsSuccessAction = (
  listQuestions: QuestionsProps,
): GetQuestionsSuccessProps =>
  action(QuestionsTypes.GET_QUESTIONS_SUCCESS, { listQuestions });

export const getQuestionsErrorAction = (): GetQuestionsErrorProps =>
  action(QuestionsTypes.GET_QUESTIONS_ERROR);

export const resetQuestionsAction = (): ResetQuestionsProps =>
  action(QuestionsTypes.RESET_QUESTIONS);
