import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  padding-top: 35px;
  background-color: #F3F1F4;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 50px;
  flex-direction: row;
  position: relative;
`;

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