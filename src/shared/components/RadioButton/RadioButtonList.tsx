import React from 'react';
import RadioButton from './index';

import * as S from './styles';

export interface RadioButtonProps {
  selected: any;
  checkRadio: (item: any) => void;
  data: any;
}

const RadioButtonList: React.FC<RadioButtonProps> = ({
  checkRadio,
  selected,
  data,
}) => (
  <S.ButtonsList>
    {data.map((itemData: any) => (
      <RadioButton
        key={itemData.answer}
        onSelect={checkRadio}
        item={itemData}
        selected={selected}
      />
    ))}
  </S.ButtonsList>
);
export default RadioButtonList;
