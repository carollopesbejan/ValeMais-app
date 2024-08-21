import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Button, ButtonText } from './style';

type NavigationProp = {
  navigate: (screen: string) => void;
};

export function HomeSemLogin() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      <Title>Home sem login</Title>
      <Button onPress={() => navigation.navigate('Splash1')}>
        <ButtonText>INICIO</ButtonText>
      </Button>
    </Container>
  );
}
