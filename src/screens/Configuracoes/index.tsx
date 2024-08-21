import React, { useState } from 'react';
import { TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import dogImg from "../../assets/dog.png";

import { 
  Container, 
  ContainerTitle, 
  TextTitleContainer, 
  TextTitle, 
  ChevronIcon, 
  ContainerUser, 
  TextUser, 
  ImageContainer, 
  ImageUser, 
  TextOverlayContainer, 
  TextOverlay, 
  ContainerForms, 
  InputContainer, 
  TextForms, 
  TextInputStyled,
  ButtonContainer,
  TextButtonSave,
  TextButtonDelete
} from './style';

type NavigationProp = {
    navigate: (screen: string) => void;
};

export function Configuracoes() {
    const navigation = useNavigation<NavigationProp>();
    const [imageUri, setImageUri] = useState<string | null>(null);

    const selectImage = () => {
        // Lógica para selecionar imagem aqui
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <Container>
                    <ContainerTitle>
                        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                            <ChevronIcon />
                        </TouchableOpacity>
                        <TextTitleContainer>
                            <TextTitle>CONFIGURAÇÕES</TextTitle>
                        </TextTitleContainer>
                    </ContainerTitle>

                    <ContainerUser>
                        <TextUser>Olá, usuário fulano</TextUser>

                        <ImageContainer>
                            <TouchableOpacity onPress={selectImage}>
                                <ImageUser source={imageUri ? { uri: imageUri } : dogImg}/>
                                <TextOverlayContainer>
                                    <TextOverlay>Alterar Imagem</TextOverlay>
                                </TextOverlayContainer>
                            </TouchableOpacity>
                        </ImageContainer>
                    </ContainerUser>
                
                    <ContainerForms>
                        <InputContainer>
                            <TextForms>Como você gostaria de ser chamado?</TextForms>
                            <TextInputStyled placeholder="Joana" />
                        </InputContainer>

                        <InputContainer>
                            <TextForms>Alterar Senha</TextForms>
                            <TextInputStyled placeholder="********" secureTextEntry={true} />
                        </InputContainer>

                        <InputContainer>
                            <TextForms>Confirmar Senha</TextForms>
                            <TextInputStyled placeholder="********" secureTextEntry={true} />
                        </InputContainer>
                    </ContainerForms>

                    <ButtonContainer onPress={() => null}>
                        <TextButtonSave>Salvar</TextButtonSave>
                    </ButtonContainer>

                    <TouchableOpacity onPress={() => null}>
                        <TextButtonDelete>Excluir conta</TextButtonDelete>
                    </TouchableOpacity>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
