import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #F3F1F4;
  align-items: center;
  justify-content: center;
`;

export const LogoTextImg = styled.Image`
  width: 78.5%;
  height: 7.5%;
  margin-top: 140px;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 10px;
`;

export const LogoImg = styled.Image`
  width: 60%;
  height: 30%;
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const EtiquetaDescontoImg = styled.Image`
  margin-top: 187px;
  width: 73.5%;
  height: 36%;
  margin-bottom: 20px;
`;

export const PilulaImg = styled.Image`
  margin-top: 201px;
  width: 88%;
  height: 31%;
  margin-bottom: 15px;
`;

export const TextDestaque = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #076D78;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const TextDescription = styled.Text`
  font-size: 17px;
  margin-left: 30px;
  margin-right: 30px;
  color: #076D78;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  margin-top: 40px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextButton = styled.Text`
  margin-top: 30px;
  margin-horizontal: 115px;
  font-size: 18px;
  color: #076D78;
`;

export const TextButtonBold = styled(TextButton)`
  margin-top: 35px;
  font-weight: bold;
`;

export const TextButtonPrimary = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #141414;
  margin-top: 35px;
  background-color: #FFC17D;
  padding-vertical: 10px;
  padding-horizontal: 105px;
  border-radius: 8px;
  border-width: 0;
`;