import styled from 'styled-components/native';
import { s, sfs } from '~/shared/utils/responsibleText';

export const Background = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND_WHITE};
  padding: ${s(8)}px;
  flex-direction: column;
`;

export const MainTitle = styled.Text`
  color: ${({ theme }) => theme.Colors.BLACK};
  font-size: ${sfs(36)}px;
  font-family: 'Roboto-Medium';
  align-self: center;
`;

export const QuestionText = styled.Text`
  margin-top: ${s(8)}px;
  color: ${({ theme }) => theme.Colors.BLACK};
  font-size: ${sfs(18)}px;
  font-family: 'Roboto-Regular';
  align-self: center;
  text-align: center;
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

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: ${s(24)}px;
`;

export const QuestionsContainer = styled.View`
  flex: 1;
`;

export const Touchable = styled.TouchableOpacity`
  elevation: 4;
  border-radius: ${s(6)}px;
`;

export const DifficultyText = styled.Text`
  color: ${({ theme }) => theme.Colors.BUTTON_COLOR};
  font-size: ${sfs(20)}px;
  font-family: 'Roboto-Medium';
  align-self: center;
  text-align: center;
`;
