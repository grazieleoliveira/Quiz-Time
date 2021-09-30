import { Reducer } from 'redux';
import { CategoriesTypes, CategoriesState } from './types';

const INITIAL_STATE: CategoriesState = {
  listCategories: [],
  loading: false,
};

const reducer: Reducer<CategoriesState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case CategoriesTypes.GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case CategoriesTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        listCategories: payload.listCategories,
      };
    case CategoriesTypes.GET_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        listCategories: [],
      };
    default:
      return state;
  }
};

export default reducer;
