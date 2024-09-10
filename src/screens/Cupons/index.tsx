import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ContainerTitle,
  TextTitleContainer,
  TextTitle,
  ChevronIcon,
  ContainerText,
  TextNoCupons
} from './style';

type NavigationProp = {
  navigate: (screen: string) => void;
};

export function Cupons() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      <ContainerTitle>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <ChevronIcon />
        </TouchableOpacity>

        <TextTitleContainer>
          <TextTitle>CUPONS</TextTitle>
        </TextTitleContainer>
      </ContainerTitle>

      <ContainerText>
        <TextNoCupons>Não há cupons disponíveis no momento...</TextNoCupons>
      </ContainerText>

    </Container>
  );
}
