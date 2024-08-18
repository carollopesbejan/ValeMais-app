import { Pressable, Alert, ActivityIndicator } from "react-native";
import { FormField } from "../../components/FormField";
import { Container } from "../../components/styles/Container";
import React, { useState } from "react";
import { supabase } from "../../lib/supabase";
import { Banner, ContainerButton, ContainerForms, Logo } from "./style";
import { FormButton } from "../../components/FormButton";
import { HasAccount } from "../../components/HasAccount";
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'; 
// Não está instalado da melhor forma a dependencia acima

export const TelaLogin = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const signInWithEmail = async () => {
        setLoading(true)
        if (!email || email.length == 0) {
            Alert.alert("Email inválido!")
            console.log("Email inválido")
        } else if (!password || password.length == 0) { 
            Alert.alert("Senha inválido!")
            console.log("Senha inválida!")
        } else if (password.length < 8) {
            Alert.alert("A senha deve possuir 8 digitos!")
            console.log("A senha deve possuir 8 digitos!")
        } else {
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })

            if (error) {
                Alert.alert(error.message)
                console.log(error.message)
                setLoading(false)
            } else {
                setLoading(false)
                console.log("Logou")
                navigation.navigate("TelaHome")
            }
        }
    }

    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        webClientId: '814728365562-02155sbosu0jifaoighgs5l6el82691u.apps.googleusercontent.com',
    })

    const signInWithGoogle = async () => {
        try {
            await GoogleSignin.signOut();
            await GoogleSignin.hasPlayServices()
            const userInfo = await GoogleSignin.signIn()
            console.log(JSON.stringify(userInfo, null, 2))
            if (userInfo.idToken) {
            const { data, error } = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: userInfo.idToken,
            })
            console.log(error, data)
            if (!error) {
                navigation.navigate("TelaHome");
            } else {
                console.error("Erro no Supabase:", error.message);
            }
            } else {
            throw new Error('no ID token present!')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Banner source={require('../../assets/bannerLogin.jpg')}  />
            <Logo source={require('../../assets/logotxt.png')}/>
            <ContainerForms>
                <FormField 
                    placeholder="ex.: joao@email.com"
                    setStateText={(text) => setEmail(text)}
                    hidden={false}
                    />
                <FormField 
                    placeholder="********"
                    setStateText={(text) => setPassword(text)}
                    hidden={false}
                    />
            </ContainerForms>
            <ContainerButton>
                {loading ? (
                    <ActivityIndicator/>
                ) : (
                    <FormButton 
                    fn={() => signInWithEmail()}
                    text="Entrar"
                    />
                )}
                <HasAccount 
                    text="Não possui conta?"
                    fn={() => navigation.navigate("TelaCadastro")}
                    textLink="Realize um cadastro"
                />
            </ContainerButton>
            <GoogleSigninButton 
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => signInWithGoogle()}
            />
        </Container>
    )
}