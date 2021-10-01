import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '~/shared/store';
import { getCategoriesAction } from '~/modules/Categories/store/ducks/actions';
import * as S from './styles';

const renderCategory = ({ item }: any) => (
  <S.ItemContainer>
    <Text>{item.name}</Text>
  </S.ItemContainer>
);

export const Home: React.FC = () => {
  const { listCategories, loading } = useSelector(
    (state: ApplicationState) => state.categories,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  console.tron.log('LISTCATEGORIES', listCategories);
  return (
    <S.Background>
      <S.Container>
        <S.Title>Quiz Time</S.Title>

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
