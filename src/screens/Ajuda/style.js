import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

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
  padding-bottom: 40px;
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

export const ChevronIconTitle = styled(Feather).attrs({
  name: 'chevron-left',
  size: 30,
})`
  margin-left: 15px;
  color: #FAAC56;
`;

// Texto Página
export const TextPage = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// FlatList
export const ChevronIcon = styled(Feather).attrs({
  name: 'chevron-right', 
  size: 20,
})`
  color: #000;
`;

export const FAQItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const FAQText = styled.Text`
  font-size: 18px;
  color: #000;
`;