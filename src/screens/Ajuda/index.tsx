import React, { useState } from 'react';
import { TouchableOpacity, FlatList, Modal, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ContainerTitle,
  TextTitleContainer,
  TextTitle,
  ChevronIcon,
  TextPage,
  FAQItem,
  FAQText,
  ChevronIconTitle,
} from './style';

type NavigationProp = {
  navigate: (screen: string) => void;
};

const FAQS = [
  {
    question: 'Como visualizar as informações          \ndos medicamentos?',
    answer: 'Para visualizar as informações dos medicamentos, acesse a página de detalhes do produto clicando em um medicamento na lista.',
  },
  {
    question: 'Como buscar medicamentos?',
    answer: 'Você pode buscar medicamentos utilizando a barra de pesquisa na parte superior da tela inicial. Digite o nome do medicamento e pressione enter.',
  },
  {
    question: 'Como visualizar ofertas?',
    answer: 'As ofertas podem ser visualizadas na seção de ofertas, acessível a partir do menu principal.',
  },
  {
    question: 'Como adicionar ou remover \nfavoritos?',
    answer: 'Para adicionar ou remover favoritos, clique no ícone de coração na página de detalhes do medicamento.',
  },
  {
    question: 'Como alterar cadastro?',
    answer: 'Para alterar seu cadastro, vá até o menu de perfil e selecione "Alterar Cadastro".',
  },
  {
    question: 'Como receber notificações?',
    answer: 'Você pode configurar suas preferências de notificação no menu de configurações.',
  },
  {
    question: 'Como ver as regras dos meus \ncupons?',
    answer: 'As regras dos cupons estão disponíveis na seção de cupons, acessível pelo menu principal.',
  },
  {
    question: 'Como avaliar meus pedidos?',
    answer: 'Após receber um pedido, você pode avaliá-lo na seção de pedidos, acessível pelo menu principal.',
  },
];

export function Ajuda() {
  const navigation = useNavigation<NavigationProp>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState<{ question: string; answer: string } | null>(null);

  const handleFAQPress = (faq: { question: string; answer: string }) => {
    setSelectedFAQ(faq);
    setModalVisible(true);
  };

  return (
    <Container>
      <ContainerTitle>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <ChevronIconTitle />
        </TouchableOpacity>

        <TextTitleContainer>
          <TextTitle>AJUDA</TextTitle>
        </TextTitleContainer>
      </ContainerTitle>

      <TextPage>Dúvidas frequentes dos usuários</TextPage>

      <FlatList
        data={FAQS}
        keyExtractor={(item) => item.question}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleFAQPress(item)}>
            <FAQItem>
              <FAQText>{item.question}</FAQText>
              <ChevronIcon />
            </FAQItem>
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
          <View style={{
            width: '80%',
            padding: 20,
            backgroundColor: '#fff',
            borderRadius: 10,
            alignItems: 'center',
          }}>
            <Text style={{ marginBottom: 15, fontSize: 18, fontWeight: 'bold' }}>{selectedFAQ?.question}</Text>
            <Text style={{ marginBottom: 15 }}>{selectedFAQ?.answer}</Text>
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </Container>
  );
}