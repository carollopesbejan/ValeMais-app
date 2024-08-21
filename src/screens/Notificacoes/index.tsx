import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ContainerTitle,
  TextTitleContainer,
  TextTitle,
  ChevronIcon
} from './style';

type NavigationProp = {
  navigate: (screen: string) => void;
};

export function Notificacoes() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      <ContainerTitle>

        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <ChevronIcon />
        </TouchableOpacity>

        <TextTitleContainer>
          <TextTitle>NOTIFICAÇÕES</TextTitle>
        </TextTitleContainer>

      </ContainerTitle>
    </Container>
  );
}
