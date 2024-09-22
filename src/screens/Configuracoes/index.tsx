import React, { useEffect, useState } from 'react';
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
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';
import { ContainerField, Label } from '../TelaCadastro/style';
import { FormField } from '../../components/FormField';

type NavigationProp = {
    navigate: (screen: string) => void;
};

export function Configuracoes() {
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [session, setSession] = useState<Session | null>(null)
    const [name, setName] = useState('')
    const navigation = useNavigation<NavigationProp>();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    const selectImage = () => {
        // Lógica para selecionar imagem aqui
    };

    const handle = async () => {
        console.log(name)

        const { error } = await supabase.auth.updateUser({
            data: { name: name }
        });

        if (error) {
            console.log('Erro ao atualizar o nome:', error.message);
        } else {
            console.log('Nome atualizado com sucesso!');
        }
        navigation.navigate("Main")
    }
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
                        {/* Verifica se a sessão e o usuário estão disponíveis */}
                        {session && session.user ? (
                            <TextUser>Olá, {session.user.user_metadata?.name || 'Usuário'}</TextUser>
                        ) : (
                            <TextUser>Usuário</TextUser>
                        )}

                        <ImageContainer>
                            <TouchableOpacity onPress={selectImage}>
                                <ImageUser source={imageUri ? { uri: imageUri } : dogImg} />
                                <TextOverlayContainer>
                                    <TextOverlay>Alterar Imagem</TextOverlay>
                                </TextOverlayContainer>
                            </TouchableOpacity>
                        </ImageContainer>
                    </ContainerUser>

                    <ContainerForms>
                        <ContainerField>
                            <Label>Como você gostaria de ser chamado?</Label>
                            <FormField 
                                placeholder="João"
                                setStateText={(text) => setName(text)}
                                hidden={false}
                            />
                        </ContainerField>

                        {/* <InputContainer>
                            <TextForms>Alterar Senha</TextForms>
                            <TextInputStyled placeholder="********" secureTextEntry={true} />
                        </InputContainer>

                        <InputContainer>
                            <TextForms>Confirmar Senha</TextForms>
                            <TextInputStyled placeholder="********" secureTextEntry={true} />
                        </InputContainer> */}
                    </ContainerForms>

                    <ButtonContainer onPress={() => handle()}>
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
