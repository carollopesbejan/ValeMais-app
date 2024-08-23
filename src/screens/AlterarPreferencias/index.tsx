import React, { useState, useEffect } from "react";
import { Preferencias } from "../TelaPreferencias";
import { supabase } from "../../lib/supabase";
import { Session } from "@supabase/supabase-js";
import { Pressable, Text } from "react-native";
import { ContainerPref } from "../../components/styles/ContainerPref";
import { useNavigation } from "@react-navigation/native";
import { AlterarPref1 } from "../../components/AlterarPref1";

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
    }

    const components = [
        <AlterarPref1 
            title="Escolha os categorias de produtos que você possui mais interesse"
            nextComponent={nextComponent}
            toPerfil={toPerfil}
            session={session}
        />
    ]


    return (
        <ContainerPref>
            {components[page]}
        </ContainerPref>
    )
}