import React, { useState } from 'react';
import { Alert, ActivityIndicator } from "react-native";
import { ButtonArrow, ContainerForms, ContainerButton, Label, ContainerField } from "./style";
import { Container } from "../../components/styles/Container";
import { supabase } from "../../lib/supabase";
import { FormField } from "../../components/FormField";
import { MaterialIcons } from '@expo/vector-icons';
import { FormButton } from '../../components/FormButton';
import { HasAccount } from '../../components/HasAccount';
import { useNavigation } from '@react-navigation/native';

export function TelaCadastro() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation<any>()

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9.@-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        return regex.test(email)
    }

    const signUpWithEmail = async () => {
        if (!email || email.length == 0) {
            Alert.alert("Email inválido!")
            console.log("Email inválido")
        } else if (!validateEmail(email)) {
            Alert.alert("Email inválido!")
            console.log("Email inválido")
        } else if (!password || password.length == 0 || password.length > 23) { 
            Alert.alert("Senha inválido!")
            console.log("Senha inválida!")
        } else if (password.length < 8) {
            Alert.alert("A senha deve possuir 8 digitos!")
            console.log("A senha deve possuir 8 digitos!")
        } else if (password != confirmPassword) {
            Alert.alert("As senhas devem ser iguais!")
            console.log("As senhas devem ser iguais!")
        } else {
            setLoading(true)
            const { error } = await supabase.auth.signUp({
                email: email,
                password: password,
            })
            if (error) {
                console.log(error.message)
                Alert.alert(error.message)
            } else {
                setLoading(false)
                navigation.navigate("TelaPreferencias")
            }
        }
    }
    
    return (
        <Container>
            <ButtonArrow onPress={() => navigation.navigate("TelaLogin")}>
                <MaterialIcons name="arrow-back-ios" size={24} color="#E8A009" />
            </ButtonArrow>
            <ContainerForms>
                <ContainerField>
                    <Label>Qual é o seu e-mail?</Label>
                    <FormField
                        placeholder="ex.: joao@email.com"
                        setStateText={(text) => setEmail(text)}
                        hidden={false}
                    />
                </ContainerField>
                <ContainerField>
                    <Label>Digite uma senha</Label>
                    <FormField
                        placeholder="********"
                        setStateText={(text) => setPassword(text)}
                        hidden={true}
                    />
                </ContainerField>
                <ContainerField>
                    <Label>Confirme sua senha</Label>
                    <FormField
                        placeholder="********"
                        setStateText={(text) => setConfirmPassword(text)}
                        hidden={true}
                    />
                </ContainerField>
            </ContainerForms>
            <ContainerButton>
                {loading ? (
                    <ActivityIndicator/>
                ) : (
                    <FormButton 
                        fn={() => signUpWithEmail()}
                        text="Cadastrar"
                    />
                )}
                <HasAccount 
                    text="Já possui conta?"
                    fn={() => navigation.navigate("TelaLogin")}
                    textLink="Entrar"
                />
            </ContainerButton>
        </Container>
    )
}