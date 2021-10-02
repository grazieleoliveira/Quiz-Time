import styled from 'styled-components/native';
import { vs, s } from 'react-native-size-matters';
import { sfs } from '~/shared/utils/responsibleText';

export const ButtonsList = styled.View`
  margin-top: ${vs(22)}px;
  align-self: flex-start;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${s(12)}px;
`;

export const Button = styled.TouchableOpacity`
  height: ${s(24)}px;
  width: ${s(24)}px;
  border-radius: ${s(12)}px;
  border-width: ${s(2)}px;
  border-color: ${({ theme }) => theme.Colors.BUTTON_COLOR};
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: ${sfs(18)}px;
  color: ${({ theme }) => theme.Colors.BLACK};
  margin-left: ${s(12)}px;
`;

export const CheckedButton = styled.View`
  width: ${s(12)}px;
  height: ${s(12)}px;
  border-radius: ${s(6)}px;
  background-color: ${({ theme }) => theme.Colors.BUTTON_COLOR};
`;
