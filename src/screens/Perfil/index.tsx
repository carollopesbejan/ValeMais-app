import React from 'react';
import { useNavigation } from '@react-navigation/native';
import dogImg from '../../assets/dog.png';

import {
  Container,
  ContainerTitle,
  TextTitle,
  ContainerUser,
  ImageContainer,
  ImageUser,
  TextUser,
  ContainerList,
  ContainerListOpcoes,
  IconListOpcoes,
  TextContainerListOpcoes,
  TextContainerListOpcoes2,
  TitleListOpcoes,
  SubtitleListOpcoes,
  ListSeparator,
  Separator,
  ChevronIcon
} from './style';

type NavigationProp = {
  navigate: (screen: string) => void;
};

export function Perfil() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      <ContainerTitle>
        <TextTitle>PERFIL</TextTitle>
      </ContainerTitle>

      <ContainerUser>
        <ImageContainer>
          <ImageUser source={dogImg} />
        </ImageContainer>
        <TextUser>Usuário Fulano</TextUser>
      </ContainerUser>

      <ContainerList>
        <ContainerListOpcoes onPress={() => navigation.navigate('Pedidos')}>
          <IconListOpcoes name="shopping-cart" size={30} />
          <TextContainerListOpcoes>
            <TitleListOpcoes>Pedidos</TitleListOpcoes>
            <SubtitleListOpcoes>Veja seus pedidos</SubtitleListOpcoes>
          </TextContainerListOpcoes>
        </ContainerListOpcoes>

        <ListSeparator />

        <ContainerListOpcoes onPress={() => navigation.navigate('Notificacoes')}>
          <IconListOpcoes name="bell" size={30} />
          <TextContainerListOpcoes>
            <TitleListOpcoes>Notificações</TitleListOpcoes>
            <SubtitleListOpcoes>Central de notificações</SubtitleListOpcoes>
          </TextContainerListOpcoes>
        </ContainerListOpcoes>

        <ListSeparator />

        <ContainerListOpcoes onPress={() => navigation.navigate('Cupons')}>
          <IconListOpcoes name="tag" size={30} />
          <TextContainerListOpcoes>
            <TitleListOpcoes>Cupons</TitleListOpcoes>
            <SubtitleListOpcoes>Meus descontos</SubtitleListOpcoes>
          </TextContainerListOpcoes>
        </ContainerListOpcoes>

        <ListSeparator />

        <ContainerListOpcoes onPress={() => navigation.navigate('AlterarPreferencias')}>
          <IconListOpcoes name="smile" size={30} />
          <TextContainerListOpcoes>
            <TitleListOpcoes>Alterar preferências</TitleListOpcoes>
            <SubtitleListOpcoes>Altere suas preferências quando quiser</SubtitleListOpcoes>
          </TextContainerListOpcoes>
        </ContainerListOpcoes>

        <ListSeparator />

        <ContainerListOpcoes onPress={() => navigation.navigate('Ajuda')}>
          <IconListOpcoes name="help-circle" size={30} />
          <TextContainerListOpcoes>
            <TitleListOpcoes>Ajuda</TitleListOpcoes>
            <SubtitleListOpcoes>Central de ajuda</SubtitleListOpcoes>
          </TextContainerListOpcoes>
        </ContainerListOpcoes>

        <ListSeparator />
        <Separator />

        <ContainerListOpcoes>
          <IconListOpcoes name="settings" size={30} />
          <TextContainerListOpcoes2>
            <TitleListOpcoes>Configurações</TitleListOpcoes>
            <ChevronIcon name="chevron-right" size={30} onPress={() => navigation.navigate('Configuracoes')} />
          </TextContainerListOpcoes2>
        </ContainerListOpcoes>

        <ListSeparator />

        <ContainerListOpcoes>
          <IconListOpcoes name="log-out" size={30} />
          <TextContainerListOpcoes>
            <TitleListOpcoes>Sair</TitleListOpcoes>
          </TextContainerListOpcoes>
        </ContainerListOpcoes>

        <ListSeparator />
      </ContainerList>
    </Container>
  );
}