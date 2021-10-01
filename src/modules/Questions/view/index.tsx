import React, { useState } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { ApplicationState } from '~/shared/store';
import * as S from './styles';

export const QuestionPage: React.FC = () => {
  const { listQuestions, loading } = useSelector(
    (state: ApplicationState) => state.questions,
  );

  const [questionCount, setQuestionCount] = useState(0);

  return (
    <S.Background>
      <Text>AAA</Text>
    </S.Background>
  );
};
