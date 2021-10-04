import { action } from 'typesafe-actions';
import {
  IncreaseWrongQuestionsStreakProps,
  IncreaseEasyRightQuestionsProps,
  IncreaseEasyWrongQuestionsProps,
  IncreaseHardRightQuestionsProps,
  IncreaseHardWrongQuestionsProps,
  IncreaseMediumRightQuestionsProps,
  IncreaseMediumWrongQuestionsProps,
  IncreaseRightQuestionsStreakProps,
  UserTypes,
  SaveUserAnswerProps,
  ResetInfoProps,
  ResetAnswerProps,
  PreviousResultProps,
} from './types';

export const incrementWrongStreak = (
  wrongAnswers: number,
): IncreaseWrongQuestionsStreakProps =>
  action(UserTypes.WRONG_QUESTIONS_STREAK, { wrongAnswers });

export const incrementRightStreak = (
  rightAnswers: number,
): IncreaseRightQuestionsStreakProps =>
  action(UserTypes.RIGHT_QUESTIONS_STREAK, { rightAnswers });

export const incrementRightEasyStreak = (
  rightAnswers: number,
): IncreaseEasyRightQuestionsProps =>
  action(UserTypes.EASY_RIGHT_QUESTIONS, { rightAnswers });

export const incrementWrongEasyStreak = (
  wrongAnswers: number,
): IncreaseEasyWrongQuestionsProps =>
  action(UserTypes.EASY_WRONG_QUESTIONS, { wrongAnswers });

export const incrementRightMediumStreak = (
  rightAnswers: number,
): IncreaseMediumRightQuestionsProps =>
  action(UserTypes.MEDIUM_RIGHT_QUESTIONS, { rightAnswers });

export const incrementWrongMediumStreak = (
  wrongAnswers: number,
): IncreaseMediumWrongQuestionsProps =>
  action(UserTypes.MEDIUM_WRONG_QUESTIONS, { wrongAnswers });

export const incrementRightHardStreak = (
  rightAnswers: number,
): IncreaseHardRightQuestionsProps =>
  action(UserTypes.HARD_RIGHT_QUESTIONS, { rightAnswers });

export const incrementWrongHardStreak = (
  wrongAnswers: number,
): IncreaseHardWrongQuestionsProps =>
  action(UserTypes.HARD_WRONG_QUESTIONS, { wrongAnswers });

export const saveUserAnswerAction = (answer: string): SaveUserAnswerProps =>
  action(UserTypes.SAVE_USER_ANSWER, { answer });

export const savePreviousAnswer = (
  previousAnswerResult: boolean,
): PreviousResultProps =>
  action(UserTypes.PREVIOUS_RESULT, { previousAnswerResult });

export const resetInfoAction = (): ResetInfoProps =>
  action(UserTypes.RESET_INFO);

export const resetAnswerAction = (): ResetAnswerProps =>
  action(UserTypes.RESET_ANSWER);
