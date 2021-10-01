import styled from 'styled-components/native';
import { s, sfs } from '~/shared/utils/responsibleText';

export const Background = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND_WHITE};
`;

export const Container = styled.View`
  padding: ${s(24)}px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.Colors.BLACK};
  font-size: ${sfs(36)}px;
  font-family: 'Roboto-Medium';
  align-self: center;
`;

export const SelectCategoryText = styled.Text`
  padding-top: ${s(24)}px;
  color: ${({ theme }) => theme.Colors.BLACK};
  font-size: ${sfs(16)}px;
  font-family: 'Roboto-Regular';
`;

export const List = styled.FlatList`
  width: 100%;
  margin-top: ${s(8)}px;
`;

export const ItemContainer = styled.TouchableOpacity`
  margin-bottom: ${s(12)}px;
  padding: ${s(4)}px;
  align-items: center;
  background-color: ${({theme}) => theme.Colors.WHITE};
  elevation: 2;
`;

export const Footer = styled.View`
  height: ${s(80)}px;
`;

export const ActivityContainer = styled.View`
  padding-top: ${s(150)}px;
`;

export const CategoryText = styled.Text`
  color: ${({ theme }) => theme.Colors.BLACK};
  font-size: ${sfs(14)}px;
  font-family: 'Roboto-Regular';
  padding: ${s(8)}px;
`;
