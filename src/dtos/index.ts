export interface CategoryProps {
  id: number;
  name: string;
}

export interface CategoriesProps {
  trivia_categories: Array<CategoryProps>;
}

export interface QuestionProps {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

export interface QuestionsProps {
  response_code: number;
  results: Array<QuestionProps>;
}
