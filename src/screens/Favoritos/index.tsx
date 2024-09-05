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
  HeartText,
  PharmacyCard,
  PharmacyImage,
  PharmacyInfo,
  PharmacyName,
  PharmacyRating,
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

const farmaciasData = [
  {
    id: '1',
    name: 'Farmácia Faustino',
    rating: '4,5',
    location: 'Cordeiro',
    distance: '2,8 km',
    image: require('../../assets/favoritos/farmaciaFaustino.png'),
  },
  {
    id: '2',
    name: 'Pense S.A.',
    rating: '4,5',
    location: 'Zumbi',
    distance: '2,8 km',
    image: require('../../assets/favoritos/penseSa.png'),
  },
  {
    id: '3',
    name: 'Lopes Farma',
    rating: '4,5',
    location: 'Caxangá',
    distance: '2,8 km',
    image: require('../../assets/favoritos/lopesFarma.png'),
  },
];

export function Favoritos() {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState('Produtos');
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]); // IDs dos produtos favoritos
  const [favoritePharmacies, setFavoritePharmacies] = useState<string[]>([]); // IDs das farmácias favoritas

  // Função para alternar produto dos favoritos
  const toggleFavoriteProduct = (productId: string) => {
    setFavoriteProducts((prevFavorites) => {
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter(id => id !== productId); // Remove o produto dos favoritos
      } else {
        return [...prevFavorites, productId]; // Adiciona o produto aos favoritos
      }
    });
  };

  // Função para alternar farmácia dos favoritos
  const toggleFavoritePharmacy = (pharmacyId: string) => {
    setFavoritePharmacies((prevFavorites) => {
      if (prevFavorites.includes(pharmacyId)) {
        return prevFavorites.filter(id => id !== pharmacyId); // Remove a farmácia dos favoritos
      } else {
        return [...prevFavorites, pharmacyId]; // Adiciona a farmácia aos favoritos
      }
    });
  };

  const renderProductItem = ({ item }) => (
    <ProductCard onPress={() => console.log(item.name)}>
      <ProductImage source={item.image} />
      <HeartIcon onPress={() => toggleFavoriteProduct(item.id)}>
        <HeartText>{favoriteProducts.includes(item.id) ? '💔' : '❤️'}</HeartText>
      </HeartIcon>
      <ProductInfo>
        <ProductPriceNew>{item.price}</ProductPriceNew>
        <ProductName>{item.name}</ProductName>
      </ProductInfo>
    </ProductCard>
  );

  const renderPharmacyItem = ({ item }) => (
    <PharmacyCard onPress={() => console.log(item.name)}>
      <PharmacyImage source={item.image} />
      <PharmacyInfo>
        <PharmacyName>{item.name}</PharmacyName>
        <PharmacyRating>⭐ {item.rating} • {item.location} • {item.distance}</PharmacyRating>
      </PharmacyInfo>
      <HeartIcon onPress={() => toggleFavoritePharmacy(item.id)}>
        <HeartText>{favoritePharmacies.includes(item.id) ? '💔' : '❤️'}</HeartText>
      </HeartIcon>
    </PharmacyCard>
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

      {activeTab === 'Produtos' && (
        <FlatList
          data={favoritosData}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{
            paddingBottom: 30,
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
        />
      )}

      {activeTab === 'Farmácias' && (
        <FlatList
          data={farmaciasData}
          renderItem={renderPharmacyItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}