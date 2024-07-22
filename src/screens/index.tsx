import { Pressable, Alert, ActivityIndicator } from "react-native";
import { FormField } from "../components/FormField";
import { Container } from "../components/styles/LoginCadastro";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Banner, ContainerButton, ContainerForms, Logo } from "./TelaLogin/style";
import { FormButton } from "../components/FormButton";
import { HasAccount } from "../components/HasAccount";

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
    return (
        <Container>
            <Banner source={require('../assets/bannerLogin.jpg')}  />
            <Logo source={require('../assets/logotxt.svg')}/>
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
        </Container>
    )
}