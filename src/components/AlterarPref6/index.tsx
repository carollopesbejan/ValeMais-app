import { FormButton } from "../FormButton"
import { IconPref } from "../IconPref"
import { Button, Container, ContainerButton, Row, SkipText, Title, RowLeft, Space } from "../styles/Preferencias"
import React, { useState, useEffect } from "react"
import { supabase } from "../../lib/supabase"

export const AlterarPref6 = ({ title, toPerfil, session }) => {
    const [pref6, setPref6] = useState([])
    const [activeWhatsapp, setActiveWhatsapp] = useState<boolean>(false)
    const [activeNotificacao, setActiveNotificacao] = useState<boolean>(false)
    const [activeEmail, setActiveEmail] = useState<boolean>(false)

    const handleIconClick = (text) => {
        console.log(text)
        setPref6((prev) => {
            if (prev.includes(text)) {
                return prev.filter(item => item !== text);
            } else {
                return [...prev, text];
            }
        })
    }

    const handleSubmit = async () => {
        if (pref6.length == 0) {
            console.log(pref6)
        } else {
            console.log(pref6)
            const pref = pref6.join(" ; ")
            console.log(pref)
            console.log(session)
            const id = session
            const dados = pref
            
            
            const { data, error } = await supabase
                .from('preferences')
                .update({ pref6: dados })
                .eq('id', id)
                .select()


            console.log(data)

        }
        toPerfil()
    }

    const handleSkip = () => {
        toPerfil()
    }

    const fetchPreferences = async () => {
        const { data: preferences, error } = await supabase
            .from('preferences')
            .select('pref6')
            .eq('id', session);

        if (error) {
            console.error('Erro ao buscar preferências:', error);
        } else if (preferences && preferences.length > 0) {
            const prefArray = preferences[0].pref6.split(' ; ');
            setPref6(prefArray);
        }
    }

    useEffect(() => {
        fetchPreferences()
    }, [])

    useEffect(() => {
        console.log(pref6);
        if (pref6.includes('whatsapp')) {
            setActiveWhatsapp(true)
        }
        if (pref6.includes('notificação')) {
            setActiveNotificacao(true)
        }
        if (pref6.includes('e-mail')) {
            setActiveEmail(true)
        }
    }, [pref6]);

    return (
        <>
            <Container>
                <Title>{title}</Title>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias6/whatsapp.png')}
                        sourceActive={require('../../assets/preferencias6/whatsappAtivo.png')}
                        text="Whatsapp"
                        active={activeWhatsapp}
                        onClick={() => handleIconClick("whatsapp")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias6/notificacao.png')}
                        sourceActive={require('../../assets/preferencias6/notificacaoAtivo.png')}
                        text="Notificação"
                        active={activeNotificacao}
                        onClick={() => handleIconClick("notificação")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias6/email.png')}
                        sourceActive={require('../../assets/preferencias6/emailAtivo.png')}
                        text="E-mail"
                        active={activeEmail}
                        onClick={() => handleIconClick("e-mail")}
                    />
                </Row>
                <RowLeft>
                    <Space />
                </RowLeft>
                <Row>
                    <Space />
                </Row>
                <Button onPress={() => handleSkip()}>
                    <SkipText>Pular Preferências</SkipText>
                </Button>
            </Container>
            <ContainerButton>
                <FormButton 
                    text={"Pronto"}
                    fn={() => handleSubmit()}
                />
            </ContainerButton>
        </>
    )
}