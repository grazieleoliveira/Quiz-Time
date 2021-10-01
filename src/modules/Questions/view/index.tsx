import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decode } from 'html-entities';
import { useNavigation } from '@react-navigation/core';
import { QuestionProps } from '~/dtos';
import { ApplicationState } from '~/shared/store';
import * as S from './styles';
import { resetQuestionsAction } from '../store/ducks/actions';
import { HOME } from '~/shared/constants/routeNames';

export const QuestionPage: React.FC = () => {
  const { listQuestions, loading } = useSelector(
    (state: ApplicationState) => state.questions,
  );

  const [question, setQuestion] = useState<QuestionProps>();
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionCount, setQuestionCount] = useState(0);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const resetQuestions = () => {
    dispatch(resetQuestionsAction());
    navigation.navigate(HOME);
  };

  const nextQuestion = () => {
    if (questionCount < 9) {
      setQuestionCount(questionCount + 1);
    }
  };

  useEffect(() => {
    if (listQuestions) {
      setQuestion(listQuestions[questionCount]);
      setQuestionTitle(decode(question?.question));
    }
  }, [listQuestions, questionCount, question]);

  return (
    <S.Background>
      <S.QuestionsContainer>
        <S.MainTitle>Questão {questionCount + 1}</S.MainTitle>
        {question !== undefined ? (
          <>
            <S.QuestionText>{questionTitle}</S.QuestionText>
          </>
        ) : (
          <ActivityIndicator />
        )}
      </S.QuestionsContainer>
      <S.ActionsContainer>
        <S.Touchable
          onPress={() => resetQuestions()}
          activeOpacity={0.7}
          style={{ backgroundColor: '#c30101' }}>
          <S.ActionText>Give Up</S.ActionText>
        </S.Touchable>
        <S.Touchable
          onPress={() => nextQuestion()}
          style={{ backgroundColor: '#00b100' }}
          activeOpacity={0.7}>
          <S.ActionText>Next</S.ActionText>
        </S.Touchable>
      </S.ActionsContainer>
    </S.Background>
  );
};
