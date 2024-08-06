import { Preferencia1 } from "../../components/Preferencia1";
import { Preferencia2 } from "../../components/Preferencia2";
import { Container } from "./style";
import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../../lib/supabase";

export const Preferencias = ({ navigation }) => {
    const [page, setPage] = useState(0)
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        })
    }, [])

    const nextComponent = () => {
        setPage((prevPage) => prevPage + 1)
    }

    const toHome = () => {
        navigation.navigate("TelaHome")
    }

    const components = [
        <Preferencia1 
            title="Escolha os categorias de produtos que você possui mais interesse"
            nextComponent={nextComponent}
            toHome={toHome}
            session={session}
        />,
        <Preferencia2 
            title="Quais marcas você possui mais interesse?"
            nextComponent={nextComponent}
            toHome={toHome}
            session={session}
        />
    ]
    return(
        <Container>
            {components[page]}
        </Container>
    )
}