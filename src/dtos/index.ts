export interface CategoryProps {
  id: number;
  name: string;
}

export interface CategoriesProps {
  trivia_categories: Array<CategoryProps>;
}
