import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decode } from 'html-entities';
import { useNavigation } from '@react-navigation/core';
import { useFormik } from 'formik';
import { QuestionProps } from '~/dtos';
import { ApplicationState } from '~/shared/store';
import * as S from './styles';
import { resetQuestionsAction } from '../store/ducks/actions';
import { HOME, RESULTS } from '~/shared/constants/routeNames';
import RadioButtonList from '~/shared/components/RadioButton/RadioButtonList';
import {
  resetAnswerAction,
  resetInfoAction,
} from '~/shared/store/ducks/user/actions';
import { groupAllAnswers, verifyAnswers, verifyRight } from '../utils';
import ModalQuestionResults from '../ModalQuestionResults';

export interface AnswerProps {
  id: number;
  answer: string;
}

export const QuestionPage: React.FC = () => {
  const { listQuestions, loading } = useSelector(
    (state: ApplicationState) => state.questions,
  );

  const { currentCategoryId } = useSelector(
    (state: ApplicationState) => state.categories,
  );

  const { currentAnswer } = useSelector(
    (state: ApplicationState) => state.user,
  );

  const user = useSelector((state: ApplicationState) => state.user);
  const [question, setQuestion] = useState<QuestionProps>();
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionCount, setQuestionCount] = useState(0);
  const [allAnswers, setAllAnswers] = useState<AnswerProps[]>();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isItRight, setIsItRight] = useState();
  const [questionDifficulty, setQuestionDifficulty] = useState('');
  const [difficultyHasChanged, setDifficultyHasChanged] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const resetQuestions = () => {
    navigation.navigate(HOME);
    dispatch(resetQuestionsAction());
    dispatch(resetInfoAction());
  };

  const nextQuestion = () => {
    if (questionCount === 9) {
      setQuestionCount(0);
      navigation.navigate(RESULTS);
    } else {
      setQuestionCount(questionCount + 1);
    }
  };

  const closeModal = () => {
    setModalIsVisible(false);
    nextQuestion();
  };

  const saveUserAnswer = (data: string, actions: any) => {
    // dispatch(saveUserAnswerAction(data.currentAnswer.answer));
    verifyAnswers(
      question?.correct_answer,
      data.currentAnswer.answer,
      question?.difficulty,
      user,
      currentCategoryId,
    );
    actions.resetForm();
    const verify = verifyRight(
      question?.correct_answer,
      data.currentAnswer.answer,
    );

    setIsItRight(verify);
    setModalIsVisible(true);
    dispatch(resetAnswerAction());
    // nextQuestion();
  };

  const { handleSubmit, dirty, handleChange, setFieldValue, values, errors } =
    useFormik({
      initialValues: {
        currentAnswer,
      },
      enableReinitialize: true,
      onSubmit: saveUserAnswer,
      validateOnChange: false,
    });

  useEffect(() => {
    setDifficultyHasChanged(true);
  }, [questionDifficulty]);
  useEffect(() => {
    if (listQuestions && !modalIsVisible) {
      setQuestion(listQuestions[questionCount]);
      setQuestionTitle(decode(question?.question));
      setQuestionDifficulty(decode(question?.difficulty));
      const newAnswersArr = groupAllAnswers(
        question?.incorrect_answers,
        question?.correct_answer,
      );
      setAllAnswers(newAnswersArr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listQuestions, questionCount, question, currentAnswer]);

  return (
    <S.Background>
      <S.QuestionsContainer>
        <S.MainTitle>Questão {questionCount + 1}</S.MainTitle>
        {!loading || modalIsVisible ? (
          <>
            <S.DifficultyText>
              {questionDifficulty.toUpperCase()}
            </S.DifficultyText>
            <S.QuestionText>{questionTitle}</S.QuestionText>

            <RadioButtonList
              selected={values.currentAnswer}
              checkRadio={(value) => {
                setFieldValue('currentAnswer', value);
              }}
              data={allAnswers}
            />
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
          disabled={!dirty}
          onPress={() => handleSubmit()}
          style={{ backgroundColor: dirty ? '#00b100' : '#999999' }}
          activeOpacity={0.7}>
          <S.ActionText>{questionCount === 9 ? 'Finish' : 'Next'}</S.ActionText>
        </S.Touchable>
      </S.ActionsContainer>
      {/* fazer o modal */}
      <Modal
        transparent
        visible={modalIsVisible}
        onRequestClose={() => {
          setModalIsVisible(true);
        }}>
        <ModalQuestionResults
          closeModal={() => closeModal()}
          text={isItRight ? 'acertou' : 'errou'}
        />
      </Modal>
    </S.Background>
  );
};
