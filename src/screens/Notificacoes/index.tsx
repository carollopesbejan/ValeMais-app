import React, { useState } from 'react';
import { TouchableOpacity, Switch, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ContainerTitle,
  TextTitleContainer,
  TextTitle,
  ChevronIcon,
  NotificationContainer,
  NotificationText,
  EmptyNotificationText
} from './style';

type NavigationProp = {
  navigate: (screen: string) => void;
};

export function Notificacoes() {
  const navigation = useNavigation<NavigationProp>();
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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

      <NotificationContainer>
        <NotificationText>Continuar recebendo notificações?</NotificationText>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </NotificationContainer>

      {!isEnabled && (
        <EmptyNotificationText>Sem notificações no momento...</EmptyNotificationText>
      )}
    </Container>
  );
}
