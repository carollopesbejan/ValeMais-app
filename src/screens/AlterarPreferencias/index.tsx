import React, { useState, useEffect } from "react";
import { Preferencias } from "../TelaPreferencias";
import { supabase } from "../../lib/supabase";
import { Session } from "@supabase/supabase-js";
import { ActivityIndicator, Pressable, Text } from "react-native";
import { ContainerPref } from "../../components/styles/ContainerPref";
import { useNavigation } from "@react-navigation/native";
import { AlterarPref1 } from "../../components/AlterarPref1";
import { AlterarPref2 } from "../../components/AlterarPref2";
import { AlterarPref3 } from "../../components/AlterarPref3";
import { AlterarPref4 } from "../../components/AlterarPref4";
import { AlterarPref5 } from "../../components/AlterarPref5";
import { AlterarPref6 } from "../../components/AlterarPref6";

export const AlterarPreferencias = () => {
    const [page, setPage] = useState(0)
    const [session, setSession] = useState<String | null>(null)
    const navigation = useNavigation<any>()

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session.user.email)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session.user.email)
        })
        console.log(session)
    }, [])

    const nextComponent = () => {
        setPage((prevPage) => prevPage + 1)
    }

    const toPerfil = () => {
        navigation.navigate('Perfil')
        setPage(0)
    }

    const components = 
        session ? (
            [
                <AlterarPref1 
                title="Escolha os categorias de produtos que você possui mais interesse"
                nextComponent={nextComponent}
                toPerfil={toPerfil}
                session={session}
                />,
                <AlterarPref2 
                title="Quais marcas você possui mais interesse?"
                nextComponent={nextComponent}
                toPerfil={toPerfil}
                session={session}
                />,
                <AlterarPref3 
                    title="Você compra em farmácia com que frequência no mês?"
                    nextComponent={nextComponent}
                    toPerfil={toPerfil}
                    session={session}
                />,
                <AlterarPref4 
                    title="Sua família é considerada:"
                    nextComponent={nextComponent}
                    toPerfil={toPerfil}
                    session={session}
                />,
                <AlterarPref5 
                    title="Qual é a renda da sua família?"
                    nextComponent={nextComponent}
                    toPerfil={toPerfil}
                    session={session}
                />,
                <AlterarPref6 
                    title="Gostaria de receber notificações com descontos e cupons?"
                    toPerfil={toPerfil}
                    session={session}
                />
            ]
        ) : (
            <ActivityIndicator />
        )


    return (
        <ContainerPref>
            {components[page]}
        </ContainerPref>
    )
}