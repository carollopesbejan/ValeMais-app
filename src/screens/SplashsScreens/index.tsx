import React from 'react';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ProgressBar from "../../components/ProgressBarComponent";

import { 
  Container, 
  LogoTextImg, 
  LogoImg, 
  EtiquetaDescontoImg, 
  PilulaImg, 
  TextDestaque, 
  TextDescription, 
  ButtonContainer, 
  TextButton, 
  TextButtonBold, 
  TextButtonPrimary 
} from './style';

import logoTextImg from '../../assets/splash/logotextImg.png';
import logoImg from '../../assets/splash/precoImg.png';
import etiquetadescontoImg from '../../assets/splash/etiquetadescontoImg.png';
import pilulaImg from '../../assets/splash/pilulaImg.png';

type NavigationProp = {
    navigate: (screen: string) => void;
};

export function Splash1 () {
    const navigation = useNavigation<NavigationProp>();

    return (
        <Container>
            <LogoTextImg source={logoTextImg} />
            <LogoImg source={logoImg} />
            
            <TextDestaque>Seja bem-vindo</TextDestaque>
            <TextDescription>
                Descubra como economizar enquanto contribui para um planeta mais saudável.
            </TextDescription>

            <ProgressBar totalSteps={3} currentStep={1} />
        
            <ButtonContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Splash3')}>
                    <TextButton>Pular</TextButton>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Splash2')}>
                    <TextButtonBold>Próximo{'\u2192'}</TextButtonBold>
                </TouchableOpacity>
            </ButtonContainer>
        </Container>
    );
}

export function Splash2 () {
    const navigation = useNavigation<NavigationProp>();

    return (
        <Container>
            <EtiquetaDescontoImg source={etiquetadescontoImg} />
            
            <TextDestaque>Descontos Especiais</TextDestaque>
            <TextDescription>
                Aproveite descontos exclusivos em medicamentos próximos ao vencimento.
            </TextDescription>

            <ProgressBar totalSteps={3} currentStep={2} />

            <ButtonContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Splash3')}>
                    <TextButton>Pular</TextButton>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Splash3')}>
                    <TextButtonBold>Próximo{'\u2192'}</TextButtonBold>
                </TouchableOpacity>
            </ButtonContainer>
        </Container>
    );
}

export function Splash3 () {
    const navigation = useNavigation<NavigationProp>();

    return (
        <Container>
            <PilulaImg source={pilulaImg} />
            
            <TextDestaque>Peça com facilidade</TextDestaque>
            <TextDescription>
                Navegue, escolha e adicione ao carrinho. Faça a diferença!
            </TextDescription>

            <ProgressBar totalSteps={3} currentStep={3} />

            <ButtonContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                    <TextButtonPrimary>Iniciar Economia</TextButtonPrimary>
                </TouchableOpacity>
            </ButtonContainer>
        </Container>
    );
}
