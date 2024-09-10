import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 35px;
  background-color: #f3f1f4;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
`;

export const TextTitleContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const TextTitle = styled.Text`
  font-size: 22.2px;
  color: #141414;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 92%; 
  background-color: #e5e5e5; 
  border-radius: 10px; 
  margin-bottom: 20px;
`;

export const TabButton = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active ? '#FAAC56' : 'transparent')}; /* Transparente para a aba inativa */
  border-radius: 10px; 
  margin: 2px;
  border-bottom-width: ${(props) => (props.active ? '0px' : '0')}; /* Sem borda na aba ativa */
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${(props) => (props.active ? '#FFF' : '#777')}; /* Cor de texto cinza para a aba inativa */
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')}; /* Texto em negrito na aba ativa */
`;

// Estilos para os produtos
export const ProductCard = styled.TouchableOpacity`
  background-color: #fff;
  width: 45%;
  margin-bottom: 20px;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  margin: 2%;
`;

export const ProductImage = styled.Image`
  width: 70px;
  height: 70px;
  resize-mode: contain;
`;

export const ProductInfo = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  color: #333;
  text-align: center;
`;

export const ProductPriceNew = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #666;
`;

export const HeartIcon = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

// Estilos para "Favoritar"
export const HeartText = styled.Text`
  font-size: 18px;
  color: #ff3e3e;
`;

// Estilos para as Farmácias
export const PharmacyCard = styled.TouchableOpacity`
  background-color: #fff;
  width: 97.5%;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-left: 5px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PharmacyImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const PharmacyInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const PharmacyName = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

export const PharmacyRating = styled.Text`
  font-size: 14px;
  color: #777;
`;
