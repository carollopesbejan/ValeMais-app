// scr/components/components.js
import styled from 'styled-components/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Container = styled(View)`
  flex: 1;
  padding-top: 35px;
  background-color: #F3F1F4;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerTitle = styled(View)`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 50px;
`;

export const TextTitle = styled(Text)`
  font-size: 22.2px;
  color: #141414;
  text-align: center;
`;

export const ContainerUser = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 13px;
`;

export const ImageContainer = styled(View)`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  overflow: hidden;
  margin-bottom: 10px;
  margin-left: -115px;
`;

export const ImageUser = styled(Image)`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const TextUser = styled(Text)`
  font-size: 21.2px;
  color: #141414;
  margin-left: 15px;
`;

export const ContainerList = styled(View)`
  flex: 1;
  align-items: flex-start;
  padding: 10px;
  width: 100%;
`;

export const ContainerListOpcoes = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 10px;
`;

export const IconListOpcoes = styled(Feather)`
  margin-right: 13px;
`;

export const TextContainerListOpcoes = styled(View)`
  flex-direction: column;
`;

export const TextContainerListOpcoes2 = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const TitleListOpcoes = styled(Text)`
  font-size: 18.2px;
  color: #141414;
`;

export const SubtitleListOpcoes = styled(Text)`
  font-size: 14.2px;
  color: #8A8A8A;
`;

export const ListSeparator = styled(View)`
  margin-top: 11px;
  margin-bottom: 11px;
  margin-left: 10px;
  height: 1px;
  border-width: 0.5px;
  border-color: #B3B3B3;
  width: 93%;
`;

export const Separator = styled(View)`
  margin-top: 30px;
`;

export const ChevronIcon = styled(Feather)`
  margin-left: 160px;
`;