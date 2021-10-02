import { decode } from 'html-entities';
import {
  incrementRightEasyStreak,
  incrementRightHardStreak,
  incrementRightMediumStreak,
  incrementRightStreak,
  incrementWrongEasyStreak,
  incrementWrongHardStreak,
  incrementWrongMediumStreak,
  incrementWrongStreak,
} from '~/shared/store/ducks/user/actions';
import { UserState } from '~/shared/store/ducks/user/types';
import { AnswerProps } from '../view';
import user from '~/shared/store/';

export const shuffle = (array: AnswerProps[]) => {
  const shuffledArray = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffledArray;
};

// terminar a regra de negocio, por enquanto ele não muda o nível das questões, só fica no nível easy computando as questões que foram erradas e acertadas. não reseta tb.
export const groupAllAnswers = (
  incorrectAnswers: string[] | string | undefined,
  correctAnswer: string | undefined,
) => {
  if (incorrectAnswers !== undefined && correctAnswer !== undefined) {
    const decodedIncorrect = incorrectAnswers.map((item: string) => {
      const decoded = decode(item);
      return decoded;
    });

    const arr = decodedIncorrect.concat(decode(correctAnswer));
    const shuffledArray = shuffle(arr);
    const newAnswersArr = shuffledArray?.map((item, index) => {
      const newItem = {
        id: index,
        answer: item,
      };
      return newItem;
    });
    return newAnswersArr;
  }
  return [];
};

export const verifyAnswers = (
  correctAnswer: string | undefined,
  userAnswer: string | undefined,
  questionType: string | undefined,
  userInfo: UserState | undefined,
) => {
  let isItRight;
  if (
    correctAnswer !== undefined &&
    userAnswer !== undefined &&
    questionType !== undefined &&
    userInfo !== undefined
  ) {
    if (correctAnswer === userAnswer) {
      isItRight = true;
      user.dispatch(incrementRightStreak(userInfo.streak.rightAnswers + 1));
    } else {
      isItRight = false;
      user.dispatch(incrementWrongStreak(userInfo.streak.wrongAnswers + 1));
    }

    switch (questionType) {
      case 'easy':
        if (isItRight) {
          user.dispatch(
            incrementRightEasyStreak(userInfo.easy.rightAnswers + 1),
          );
          break;
        }
        user.dispatch(incrementWrongEasyStreak(userInfo.easy.wrongAnswers + 1));
        break;
      case 'medium':
        if (isItRight) {
          user.dispatch(
            incrementRightMediumStreak(userInfo.medium.rightAnswers + 1),
          );
          break;
        }
        user.dispatch(
          incrementWrongMediumStreak(userInfo.medium.wrongAnswers + 1),
        );
        break;
      case 'hard':
        if (isItRight) {
          user.dispatch(
            incrementRightHardStreak(userInfo.hard.rightAnswers + 1),
          );
          break;
        }
        user.dispatch(incrementWrongHardStreak(userInfo.hard.wrongAnswers + 1));
        break;
      default:
        break;
    }
  }
};
