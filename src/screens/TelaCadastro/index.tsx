import { Alert, Pressable } from "react-native";
import { Button, ButtonArrow, ContainerForms, TextButton, ContainerButton, Text, LinkText, Label, ContainerField } from "./style";
import { Container } from "../../components/styles/Container";
import React, { useState } from 'react'
import { supabase } from "../../lib/supabase";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { FormField } from "../../components/FormField";


export function TelaCadastro() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const singUpWithEmail = async () => {
        if (!email || email.length == 0) {
            Alert.alert("Email inválido!")
            console.log("Email inválido")
        } else if (!password || password.length == 0) { 
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
            }
            setLoading(false)
        }
    }
    
    return (
        <Container>
            <ButtonArrow>
                <ArrowBackIosIcon/>
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
                <Button onPress={() => singUpWithEmail()}><TextButton>Cadastrar</TextButton></Button>
                <Text>Já possui conta? <Pressable><LinkText>Entrar</LinkText></Pressable></Text>
            </ContainerButton>
        </Container>
    )
}