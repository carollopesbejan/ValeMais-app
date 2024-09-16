import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
  padding: 16px;
`;

// Header (Cabeçalho)
export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

// Barra de busca
export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 16px;
  justify-content: space-between;
`;

// Container de produto
export const ProductContainer = styled.View`
  background-color: #fff;
  border-radius: 8px;
  margin: 8px;
  padding: 10px;
  width: 48%;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 8px;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 4px;
`;

// Container de farmácia
export const StoreContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 8px;
`;

export const StoreLogo = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const StoreInfo = styled.View`
  flex: 1;
`;

export const StoreName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const StoreDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StoreRating = styled.Text`
  font-size: 14px;
  color: #333;
  margin-left: 4px;
`;

export const StoreDistance = styled.Text`
  font-size: 14px;
  color: #666;
  margin-left: 10px;
`;

// Ícones de coração e estrela
export const IconHeart = styled(Feather).attrs({
  name: 'heart',
  size: 20,
})`
  color: #ff6b6b;
`;

export const IconStar = styled(Feather).attrs({
  name: 'star',
  size: 16,
})`
  color: #ffd700;
`;

// Botão Ver mais
export const ButtonVerMais = styled.TouchableOpacity`
  margin-top: 16px;
  align-self: center;
`;

export const ButtonVerMaisText = styled.Text`
  font-size: 16px;
  color: #007bff;
  font-weight: bold;
`;
