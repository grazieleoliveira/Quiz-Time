import request from './request';
import {
  EASY_QUESTIONS,
  HARD_QUESTIONS,
  MEDIUM_QUESTIONS,
  QUESTIONS_PATH,
} from '~/shared/constants/api';

export const getQuestions = async (id: string, difficulty?: string) => {
  try {
    let DIFFICULTY_PATH;
    switch (difficulty) {
      case 'easy':
        DIFFICULTY_PATH = EASY_QUESTIONS;
        break;
      case 'medium':
        DIFFICULTY_PATH = MEDIUM_QUESTIONS;
        break;
      case 'hard':
        DIFFICULTY_PATH = HARD_QUESTIONS;
        break;
      default:
        DIFFICULTY_PATH = EASY_QUESTIONS;
    }
    const response = await request.get(QUESTIONS_PATH, '', id, DIFFICULTY_PATH);
    return response;
  } catch {
    return null;
  }
};
