import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetQuestionsAction } from '~/modules/Questions/store/ducks/actions';
import { HOME, RESULTS } from '~/shared/constants/routeNames';
import { ApplicationState } from '~/shared/store';
import { resetInfoAction } from '~/shared/store/ducks/user/actions';
import * as S from './styles';

export interface AnswerProps {
  id: number;
  answer: string;
}

export const ResultPage: React.FC = () => {
  const { easy, medium, hard } = useSelector(
    (state: ApplicationState) => state.user,
  );

  const user = useSelector((state: ApplicationState) => state.user);
  const totalRight =
    easy.rightAnswers + medium.rightAnswers + hard.rightAnswers;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const resetQuestions = () => {
    navigation.navigate(HOME);
    dispatch(resetQuestionsAction());
    dispatch(resetInfoAction());
  };

  return (
    <S.Background>
      <S.MainTitle>Resultados</S.MainTitle>
      <S.ScoreText>Você acertou: {totalRight} questões</S.ScoreText>
      {/* <S.ScoreText>
        {totalRight > 7 ? 'Você foi muito bem!' : 'Você pode melhorar!'}
      </S.ScoreText> */}
      <S.ScoresContainer>
        <S.ResultText>
          <S.DifficultyText>EASY: </S.DifficultyText>
          {easy.rightAnswers} correct | {easy.wrongAnswers} incorrect
        </S.ResultText>
        {medium.rightAnswers + medium.wrongAnswers === 0 ? (
          <S.ResultText>
            <S.DifficultyText>MEDIUM: </S.DifficultyText>None answered
          </S.ResultText>
        ) : (
          <S.ResultText>
            <S.DifficultyText>MEDIUM: </S.DifficultyText>
            {medium.rightAnswers} correct | {medium.wrongAnswers} incorrect
          </S.ResultText>
        )}
        {hard.rightAnswers + hard.wrongAnswers === 0 ? (
          <S.ResultText>
            <S.DifficultyText>HARD: </S.DifficultyText>None answered
          </S.ResultText>
        ) : (
          <S.ResultText>
            <S.DifficultyText>HARD: </S.DifficultyText>
            {hard.rightAnswers} correct | {hard.wrongAnswers} incorrect
          </S.ResultText>
        )}
      </S.ScoresContainer>
      <S.Touchable
        onPress={() => resetQuestions()}
        activeOpacity={0.7}
        style={{ backgroundColor: '#f57b5d' }}>
        <S.ActionText>Try Again</S.ActionText>
      </S.Touchable>
    </S.Background>
  );
};
