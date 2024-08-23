import { FormButton } from "../FormButton"
import { IconPref } from "../IconPref"
import { Button, Container, ContainerButton, Row, SkipText, Title, Space, RowLeft } from "../styles/Preferencias"
import { useState, useEffect } from "react"
import { supabase } from "../../lib/supabase"
import React from "react"

export const AlterarPref3 = ({ title, nextComponent, toPerfil, session }) => {
    const [pref3, setPref3] = useState([])
    const [active1, setActive1] = useState<boolean>(false)
    const [active1ou2, setActive1ou2] = useState<boolean>(false)
    const [active3ou4, setActive3ou4] = useState<boolean>(false)
    const [active5ouMais, setActive5ouMais] = useState<boolean>(false)

    const handleIconClick = (text) => {
        console.log(text)
        setPref3((prev) => {
            if (prev.includes(text)) {
                return prev.filter(item => item !== text);
            } else {
                return [...prev, text];
            }
        })
    }

    const handleSubmit = async () => {
        if (pref3.length == 0) {
            console.log(pref3)
        } else {
            console.log(pref3)
            const pref = pref3.join(" ; ")
            console.log(pref)
            console.log(session)
            const id = session
            const dados = pref
            
            
            const { data, error } = await supabase
                .from('preferences')
                .update({ pref3: dados })
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
            .select('pref3')
            .eq('id', session);

        if (error) {
            console.error('Erro ao buscar preferências:', error);
        } else if (preferences && preferences.length > 0) {
            const prefArray = preferences[0].pref3.split(' ; ');
            setPref3(prefArray);
        }
    }

    useEffect(() => {
        fetchPreferences()
    }, [])

    useEffect(() => {
        console.log(pref3);
        if (pref3.includes('1')) {
            setActive1(true)
        }
        if (pref3.includes('1 ou 2')) {
            setActive1ou2(true)
        }
        if (pref3.includes('3 ou 4')) {
            setActive3ou4(true)
        }
        if (pref3.includes('5 ou mais')) {
            setActive5ouMais(true)
        }
    }, [pref3]);

    return (
        <>
            <Container>
                <Title>{title}</Title>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias3/1.png')}
                        sourceActive={require('../../assets/preferencias3/1Ativo.png')}
                        text="Até 1 vez"
                        active={active1}
                        onClick={() => handleIconClick("1")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias3/1ou2.png')}
                        sourceActive={require('../../assets/preferencias3/1ou2Ativo.png')}
                        text={"Entre 1 e 2\nvezes"}
                        active={active1ou2}
                        onClick={() => handleIconClick("1 ou 2")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias3/3ou4.png')}
                        sourceActive={require('../../assets/preferencias3/3ou4Ativo.png')}
                        text={"Entre 3 e 4\nvezes"}
                        active={active3ou4}
                        onClick={() => handleIconClick("3 ou 4")}
                    />
                </Row>
                <RowLeft>
                    <IconPref 
                        source={require('../../assets/preferencias3/5.png')}
                        sourceActive={require('../../assets/preferencias3/5Ativo.png')}
                        text={"Acima de 5\nvezes"}
                        active={active5ouMais}
                        onClick={() => handleIconClick("5 ou mais")}
                    />
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