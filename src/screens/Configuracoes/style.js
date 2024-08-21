import styled from 'styled-components/native';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Contêiner principal
export const Container = styled(View)`
  flex: 1;
  padding-top: 35px;
  background-color: #F3F1F4;
  justify-content: flex-start;
  align-items: center;
`;

// Título e chevron
export const ContainerTitle = styled(View)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 50px;
  flex-direction: row;
  position: relative;
`;

export const TextTitleContainer = styled(View)`
  flex: 1;
  align-items: center;
  margin-left: -41px;
`;

export const TextTitle = styled(Text)`
  font-size: 22.2px;
  color: #141414;
`;

export const ChevronIcon = styled(Feather).attrs({
  name: "chevron-left",
  size: 30,
  color: '#FAAC56'
})`
  margin-left: 15px;
`;

// Seção do usuário
export const ContainerUser = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-left: 52px;
`;

export const TextUser = styled(Text)`
  font-size: 20.2px;
  color: #141414;
  align-self: flex-start;
  margin-bottom: 30px;
`;

export const ImageContainer = styled(View)`
  width: 180px;
  height: 180px;
  border-radius: 125px;
  overflow: hidden;
  justify-content: flex-start;
  margin-right: 55px;
  margin-bottom: 30px;
`;

export const ImageUser = styled(Image)`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const TextOverlayContainer = styled(View)`
  position: absolute;
  top: 77%;
  left: 37.5%;
  transform: translate(-75px, -10px);
  background-color: rgba(0, 0, 0, 0.5);
  width: 200px;
  height: 100px;
  padding-horizontal: 10px;
  padding-vertical: 5px;
`;

export const TextOverlay = styled(Text)`
  color: #FFF;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

// Formulários
export const ContainerForms = styled(View)`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 52px;
`;

export const InputContainer = styled(View)`
  margin-bottom: 20px;
  width: 85%;
`;

export const TextForms = styled(Text)`
  font-size: 16px;
  color: #141414;
  margin-bottom: 8px;
`;

export const TextInputStyled = styled(TextInput)`
  border-color: #000;
  border-width: 1px;
  border-radius: 8px;
  padding: 5px;
  padding-left: 20px;
  width: 100%;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 90%;
  margin-bottom: 5px;
  margin-top: 15px;
  background-color: #FFC17D;
  padding-vertical: 10px;
  padding-horizontal: 105px;
  border-radius: 8px;
  border-width: 0;
  align-items: center;
  justify-content: center;
`;

export const TextButtonSave = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #141414;
`;

export const TextButtonDelete = styled(Text)`
  text-decoration: underline;
  font-size: 16px;
  color: black;
  margin-top: 5px;
  margin-bottom: 25px;
`;