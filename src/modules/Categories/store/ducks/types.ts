import { Action } from 'redux';
import { CategoriesProps } from '~/dtos';

export enum CategoriesTypes {
  GET_CATEGORIES = '@categories/GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS = '@Categories/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR = '@books/GET_CATEGORIES_ERROR',
}

export interface CategoriesState {
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
