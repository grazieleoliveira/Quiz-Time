import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ApplicationState } from '~/shared/store';
import { getCategoriesAction } from '~/modules/Categories/store/ducks/actions';
import * as S from './styles';
import { CategoryProps } from '~/dtos';
import { getQuestionsAction } from '~/modules/Questions/store/ducks/actions';
import { QUESTIONS } from '~/shared/constants/routeNames';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { incrementWrongStreak } from '~/shared/store/ducks/user/actions';

export const Home: React.FC = () => {
  const { listCategories, loading } = useSelector(
    (state: ApplicationState) => state.categories,
  );

  const { streak, easy } = useSelector((state: ApplicationState) => state.user);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const getQuestions = (category: CategoryProps) => {
    if (!loading) {
      dispatch(getQuestionsAction(category.id.toString()));
      navigation.navigate(QUESTIONS);
    }
  };

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  console.tron.log('EASY', easy);
  const renderCategory = ({ item }: any) => (
    <S.ItemContainer
      onPress={() => getQuestions(item)}
      activeOpacity={0.7}
      style={{
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, // IOS
      }}>
      <S.CategoryText>{item.name}</S.CategoryText>
    </S.ItemContainer>
  );
  return (
    <S.Background>
      <S.Container>
        <TouchableOpacity
          onPress={() =>
            dispatch(incrementWrongStreak(streak.wrongAnswers + 1))
          }>
          <S.Title>Quiz Time</S.Title>
        </TouchableOpacity>

        <S.SelectCategoryText>
          Para iniciar o quiz, selecione uma categoria:
        </S.SelectCategoryText>
        {loading ? (
          <S.ActivityContainer>
            <ActivityIndicator size="large" />
          </S.ActivityContainer>
        ) : (
          <S.List
            data={listCategories}
            extraData={listCategories}
            renderItem={renderCategory}
            keyExtractor={(item: any) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<S.Footer />}
          />
        )}
      </S.Container>
    </S.Background>
  );
};
