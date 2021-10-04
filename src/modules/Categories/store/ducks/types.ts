import { Action } from 'redux';
import { CategoriesProps } from '~/dtos';

export enum CategoriesTypes {
  GET_CATEGORIES = '@categories/GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS = '@categories/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR = '@categories/GET_CATEGORIES_ERROR',
  SET_CURRENT_CATEGORY_ID = '@categories/SET_CURRENT_CATEGORY_ID',
}

export interface CategoriesState {
  currentCategoryId: string;
  listCategories: [];
  loading: boolean;
}

export interface GetCategoriesProps extends Action {
  type: CategoriesTypes.GET_CATEGORIES;
}

export interface GetCategoriesSuccessProps extends Action {
  type: CategoriesTypes.GET_CATEGORIES_SUCCESS;
  payload: { listCategories: CategoriesProps };
}

export interface GetCategoriesErrorProps extends Action {
  type: CategoriesTypes.GET_CATEGORIES_ERROR;
}

export interface SetCurrentCategoryIdProps extends Action {
  type: CategoriesTypes.SET_CURRENT_CATEGORY_ID;
  payload: { currentCategoryId: string };
}
