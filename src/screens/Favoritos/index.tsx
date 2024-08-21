import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

import {
  Container,
  ContainerTitle,
  TextTitleContainer,
  TextTitle,
  ButtonContainer,
  TabButton,
  ButtonText,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductPriceNew,
  ProductName,
  HeartIcon,
  HeartText, // Importando o HeartText
} from './style';

type NavigationProp = {
  navigate: (screen: string) => void;
};

const favoritosData = [
  {
    id: '1',
    name: 'Hidratante Labial',
    price: 'R$ 12,99',
    image: require('../../assets/favoritos/hidratanteLabial.png'),
  },
  {
    id: '2',
    name: 'Protetor solar 200g',
    price: 'R$ 32,99',
    image: require('../../assets/favoritos/protetorSolar.png'),
  },
  {
    id: '3',
    name: 'Benoflex P',
    price: 'R$ 12,00',
    image: require('../../assets/favoritos/benoflex.png'),
  },
  {
    id: '4',
    name: 'Xarope 44E',
    price: 'R$ 8,00',
    image: require('../../assets/favoritos/xaropeVick.png'),
  },
];

export function Favoritos() {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState('Produtos');

  const renderItem = ({ item }) => (
    <ProductCard onPress={() => console.log(item.name)}>
      <ProductImage source={item.image} />
      <HeartIcon onPress={() => console.log(`Favoritar: ${item.name}`)}>
        <HeartText>❤️</HeartText>
      </HeartIcon>
      <ProductInfo>
        <ProductPriceNew>{item.price}</ProductPriceNew>
        <ProductName>{item.name}</ProductName>
      </ProductInfo>
    </ProductCard>
  );

  return (
    <Container>
      <ContainerTitle>
        <TextTitleContainer>
          <TextTitle>FAVORITOS</TextTitle>
        </TextTitleContainer>
      </ContainerTitle>

      <ButtonContainer>
        <TabButton
          active={activeTab === 'Produtos'}
          onPress={() => setActiveTab('Produtos')}
        >
          <ButtonText active={activeTab === 'Produtos'}>Produtos</ButtonText>
        </TabButton>

        <TabButton
          active={activeTab === 'Farmácias'}
          onPress={() => setActiveTab('Farmácias')}
        >
          <ButtonText active={activeTab === 'Farmácias'}>Farmácias</ButtonText>
        </TabButton>
      </ButtonContainer>

      {/* Renderiza a lista de produtos favoritos quando a aba "Produtos" está ativa */}
      {activeTab === 'Produtos' && (
        <FlatList
          data={favoritosData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{
            paddingBottom: 30,
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}