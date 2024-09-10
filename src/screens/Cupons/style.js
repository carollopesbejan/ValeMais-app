import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, View, Text } from 'react-native';

// Contêiner principal
export const Container = styled.View`
  flex: 1;
  padding-top: 35px;
  background-color: #F3F1F4;
  justify-content: flex-start;
  align-items: center;
`;

// Contêiner de Título
export const ContainerTitle = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 50px;
  flex-direction: row;
  position: relative;
`;

// Título e chevron
export const TextTitleContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-left: -41px;
`;

export const TextTitle = styled.Text`
  font-size: 22.2px;
  color: #141414;
`;

export const ChevronIcon = styled(Feather).attrs({
  name: 'chevron-left',
  size: 30,
})`
  margin-left: 15px;
  color: #FAAC56;
`;

// Tela
export const ContainerText = styled.View`
  align-items: center;
`;

export const TextNoCupons = styled.Text`
  color: #000000; 
  font-size: 17px;
  text-align: center;
  margin-top: 20px;
`;