import request from './request';
import {
  EASY_QUESTIONS,
  ENCODING,
  QUESTIONS_PATH,
} from '~/shared/constants/api';

export const getQuestions = async (id: string) => {
  try {
    const response = await request.get(
      QUESTIONS_PATH,
      '',
      id,
      EASY_QUESTIONS,
    );
    return response;
  } catch {
    return null;
  }
};
