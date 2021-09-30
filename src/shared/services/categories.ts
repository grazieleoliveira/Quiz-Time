import request from './request';
import { CATEGORIES_PATH } from '~/shared/constants/api';

export const getCategories = async () => {
  try {
    const response = await request.get(CATEGORIES_PATH);
    return response;
  } catch {
    return null;
  }
};
