import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, ContainerTitle, TextTitleContainer, TextTitle, ChevronIcon } from './style';

export function Pedidos() {
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerTitle>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronIcon />
        </TouchableOpacity>

        <TextTitleContainer>
          <TextTitle>PEDIDOS</TextTitle>
        </TextTitleContainer>
        
      </ContainerTitle>
    </Container>
  );
}
