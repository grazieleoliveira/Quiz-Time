import { action } from 'typesafe-actions';
import { CategoriesProps } from '~/dtos';
import {
  CategoriesTypes,
  GetCategoriesProps,
  GetCategoriesSuccessProps,
  GetCategoriesErrorProps,
  SetCurrentCategoryIdProps,
} from './types';

export const getCategoriesAction = (): GetCategoriesProps =>
  action(CategoriesTypes.GET_CATEGORIES);

export const getCategoriesSuccessAction = (
  listCategories: CategoriesProps,
): GetCategoriesSuccessProps =>
  action(CategoriesTypes.GET_CATEGORIES_SUCCESS, { listCategories });

export const getCategoriesErrorAction = (): GetCategoriesErrorProps =>
  action(CategoriesTypes.GET_CATEGORIES_ERROR);

export const setCurrentCategoryIdAction = (
  currentCategoryId: string,
): SetCurrentCategoryIdProps =>
  action(CategoriesTypes.SET_CURRENT_CATEGORY_ID, { currentCategoryId });
