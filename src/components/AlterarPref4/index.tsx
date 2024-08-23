import { FormButton } from "../FormButton"
import { IconPref } from "../IconPref"
import { Button, Container, ContainerButton, Row, SkipText, Title, RowLeft, Space } from "../styles/Preferencias"
import { useState, useEffect } from "react"
import { supabase } from "../../lib/supabase"
import React from "react"

export const AlterarPref4 = ({ title, nextComponent, toPerfil, session }) => {
    const [pref4, setPref4] = useState([])
    const [active1ou2, setActive1ou2] = useState<boolean>(false)
    const [active3ou4, setActive3ou4] = useState<boolean>(false)
    const [active5ouMais, setActive5ouMais] = useState<boolean>(false)

    const handleIconClick = (text) => {
        console.log(text)
        setPref4((prev) => {
            if (prev.includes(text)) {
                return prev.filter(item => item !== text);
            } else {
                return [...prev, text];
            }
        })
    }

    const handleSubmit = async () => {
        if (pref4.length == 0) {
            console.log(pref4)
        } else {
            console.log(pref4)
            const pref = pref4.join(" ; ")
            console.log(pref)
            console.log(session)
            const id = session
            const dados = pref
            
            
            const { data, error } = await supabase
                .from('preferences')
                .update({ pref4: dados })
                .eq('id', id)
                .select()


            console.log(data)

        }
        nextComponent()
    }

    const handleSkip = () => {
        toPerfil()
    }

    const fetchPreferences = async () => {
        const { data: preferences, error } = await supabase
            .from('preferences')
            .select('pref4')
            .eq('id', session);

        if (error) {
            console.error('Erro ao buscar preferências:', error);
        } else if (preferences && preferences.length > 0) {
            const prefArray = preferences[0].pref4.split(' ; ');
            setPref4(prefArray);
        }
    }

    useEffect(() => {
        fetchPreferences()
    }, [])

    useEffect(() => {
        console.log(pref4);
        if (pref4.includes('1 ou 2')) {
            setActive1ou2(true)
        }
        if (pref4.includes('3 ou 4')) {
            setActive3ou4(true)
        }
        if (pref4.includes('5 ou mais')) {
            setActive5ouMais(true)
        }
    }, [pref4]);

    return (
        <>
            <Container>
                <Title>{title}</Title>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias4/pequena.png')}
                        sourceActive={require('../../assets/preferencias4/pequenaAtivo.png')}
                        text={"Pequena (1 ou\n2 membros)"}
                        active={active1ou2}
                        onClick={() => handleIconClick("1 ou 2")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias4/media.png')}
                        sourceActive={require('../../assets/preferencias4/mediaAtivo.png')}
                        text={"Média (3 ou 4\nmembros)"}
                        active={active3ou4}
                        onClick={() => handleIconClick("3 ou 4")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias4/grande.png')}
                        sourceActive={require('../../assets/preferencias4/grandeAtivo.png')}
                        text={"Grande (5 ou\nmais membros)"}
                        active={active5ouMais}
                        onClick={() => handleIconClick("5 ou mais")}
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
                    text={"Próximo"}
                    fn={() => handleSubmit()}
                />
            </ContainerButton>
        </>
    )
}