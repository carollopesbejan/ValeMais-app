import { Alert, TouchableOpacity } from "react-native";
import { Button, Container, ButtonArrow, ContainerForms, TextButton, ContainerButton, Text, LinkText } from "./style";
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
                <FormField
                    label="Qual é o seu e-mail?"
                    placeholder="ex.: joao@email.com"
                    fn={(text) => setEmail(text)}
                    hidden={false}
                />
                <FormField
                    label="Digite uma senha"
                    placeholder="********"
                    fn={(text) => setPassword(text)}
                    hidden={true}
                />
                <FormField
                    label="Confirme sua senha"
                    placeholder="********"
                    fn={(text) => setConfirmPassword(text)}
                    hidden={true}
                />
            </ContainerForms>
            <ContainerButton>
                <Button onPress={() => singUpWithEmail()}><TextButton>Cadastrar</TextButton></Button>
                <Text>Já possui conta? <TouchableOpacity><LinkText>Entrar</LinkText></TouchableOpacity></Text>
            </ContainerButton>
        </Container>
    )
}