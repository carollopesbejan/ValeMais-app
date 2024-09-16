import React from 'react';
import { FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  HeaderContainer,
  SearchBar,
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductName,
  StoreContainer,
  StoreLogo,
  StoreInfo,
  StoreName,
  StoreDetails,
  StoreRating,
  StoreDistance,
  IconHeart,
  IconStar,
  ButtonVerMais,
  ButtonVerMaisText,
} from './style';

type NavigationProp = {
  navigate: (screen: string) => void;
};

// Dados simulados para os produtos
const products = [
  { id: '1', name: 'Doralgina 500mg', price: 'R$ 12,29', image: require('./assets/doralgina.png') },
  { id: '2', name: 'Protetor solar 200g', price: 'R$ 35,39', image: require('./assets/protetor-solar.png') },
  // ...mais produtos
];

// Dados simulados para as farmácias
const stores = [
  { id: '1', name: 'Farmácia Faustino', rating: 4.5, distance: '2,8 km', logo: require('./assets/faustino.png') },
  { id: '2', name: 'Pense S.A.', rating: 4.5, distance: '2,8 km', logo: require('./assets/pense-sa.png') },
  // ...mais farmácias
];

export function HomeSemLogin() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      {/* Cabeçalho */}
      <HeaderContainer>
        <TouchableOpacity>
          <Image source={require('./assets/location-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/cart-icon.png')} />
        </TouchableOpacity>
      </HeaderContainer>

      {/* Barra de busca */}
      <SearchBar>
        <Image source={require('./assets/search-icon.png')} />
        <TouchableOpacity>
          <Image source={require('./assets/camera-icon.png')} />
        </TouchableOpacity>
      </SearchBar>

      {/* Lista de produtos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductContainer>
            <ProductImage source={item.image} />
            <ProductName>{item.name}</ProductName>
            <ProductPrice>{item.price}</ProductPrice>
            <IconHeart />
          </ProductContainer>
        )}
      />

      {/* Lista de farmácias */}
      <FlatList
        data={stores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StoreContainer>
            <StoreLogo source={item.logo} />
            <StoreInfo>
              <StoreName>{item.name}</StoreName>
              <StoreDetails>
                <IconStar />
                <StoreRating>{item.rating}</StoreRating>
                <StoreDistance>{item.distance}</StoreDistance>
              </StoreDetails>
            </StoreInfo>
            <IconHeart />
          </StoreContainer>
        )}
      />

      {/* Botão Ver mais */}
      <ButtonVerMais>
        <ButtonVerMaisText>Ver mais</ButtonVerMaisText>
      </ButtonVerMais>
    </Container>
  );
}

