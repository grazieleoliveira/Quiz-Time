import React from 'react';
import { useDispatch } from 'react-redux';

import * as S from './styles';

interface ModalOptionsCameraProps {
  closeModal: () => void;
  text: string;
}

const ModalQuestionResults: React.FC<ModalOptionsCameraProps> = ({
  closeModal,
  text,
}) => {
  const dispatgch = useDispatch();
  return (
    <S.Container onPress={() => closeModal()}>
      <S.StatusBar />
      <S.Main>
        <S.Title>Você {text}!</S.Title>
        <S.Button onPress={() => closeModal()}>
          <S.ButtonText>Next</S.ButtonText>
        </S.Button>
      </S.Main>
    </S.Container>
  );
};

export default ModalQuestionResults;
