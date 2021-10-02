import React from 'react';

import * as S from './styles';

interface RadioButtonProps {
  item: any;
  selected: any;
  onSelect: (item: any) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  item,
  selected,
  onSelect,
}) => (
  <S.ButtonContainer>
    <S.Button onPress={() => onSelect(item)}>
      {selected?.id === item.id && <S.CheckedButton />}
    </S.Button>
    <S.Label>{item?.answer}</S.Label>
  </S.ButtonContainer>
);

export default RadioButton;
