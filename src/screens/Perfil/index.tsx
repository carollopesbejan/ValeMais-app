import React, { useEffect, useState } from 'react';
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
import { supabase } from '../../lib/supabase';
import { Session } from '@supabase/supabase-js';

type NavigationProp = {
  navigate: (screen: string) => void;
};

export function Perfil() {
  const [session, setSession] = useState<Session | null>(null)
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const logOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error('Erro ao sair:', error.message);
    } else {
        console.log('Logout realizado com sucesso!');
        navigation.navigate('TelaLogin');
    }
  }

  return (
    <Container>
      <ContainerTitle>
        <TextTitle>PERFIL</TextTitle>
      </ContainerTitle>

      <ContainerUser>
        <ImageContainer>
          <ImageUser source={dogImg} />
        </ImageContainer>
        {/* Verifica se a sessão e o usuário estão disponíveis */}
        {session && session.user ? (
          <TextUser>{ session.user.user_metadata?.name || 'Usuário' }</TextUser>
        ) : (
          <TextUser>Usuário</TextUser>
        )}
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

        <ContainerListOpcoes onPress={() => logOut()}>
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
