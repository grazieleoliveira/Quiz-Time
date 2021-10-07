import styled from 'styled-components/native';
import { s, sfs } from '~/shared/utils/responsibleText';

export const Background = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND_WHITE};
  padding: ${s(8)}px;
  flex-direction: column;
`;
export const ResultText = styled.Text`
  margin-top: ${s(8)}px;
  color: ${({ theme }) => theme.Colors.BLACK};
  font-size: ${sfs(20)}px;
  font-family: 'Roboto-Regular';
  align-self: center;
  text-align: center;
`;
export const MainTitle = styled.Text`
  color: ${({ theme }) => theme.Colors.BLACK};
  font-size: ${sfs(36)}px;
  font-family: 'Roboto-Medium';
  align-self: center;
`;

export const ScoreText = styled.Text`
  color: ${({ theme }) => theme.Colors.BUTTON_COLOR};
  font-size: ${sfs(20)}px;
  font-family: 'Roboto-Medium';
  align-self: center;
  text-align: center;
`;

export const DifficultyText = styled.Text`
  color: ${({ theme }) => theme.Colors.BLACK};
  font-size: ${sfs(20)}px;
  font-family: 'Roboto-Medium';
`;

export const ScoresContainer = styled.View`
  margin-top: ${s(40)}px;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const Touchable = styled.TouchableOpacity`
  margin-bottom: ${s(32)}px;
  margin-left: ${s(16)}px;
  margin-right: ${s(16)}px;
  elevation: 4;
  border-radius: ${s(6)}px;
`;

export const ActionText = styled.Text`
  color: ${({ theme }) => theme.Colors.WHITE};
  font-size: ${sfs(20)}px;
  font-family: 'Roboto-Medium';
  align-self: center;
  text-align: center;
  padding: ${s(8)}px;
  width: ${s(100)}px;
`;
