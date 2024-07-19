import { Alert, View } from "react-native";
import { Button, Container, ButtonArrow, ContainerForms, Input, Text } from "./style";
import React, { useState } from 'react'
import { supabase } from "../../lib/supabase";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export function TelaCadastro() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
        }else {
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
                <Input 
                placeholder="email" 
                onChangeText={(text) => setEmail(text)}></Input>
                <Input 
                placeholder="senha" 
                onChangeText={(text) => setPassword(text)}></Input>
            </ContainerForms>
            <Button onPress={() => singUpWithEmail()}><Text>Cadastrar</Text></Button>
        </Container>
    )
}