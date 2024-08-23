import { FormButton } from "../FormButton"
import { IconPref } from "../IconPref"
import { Button, Container, ContainerButton, Row, SkipText, Title, Space, RowLeft, RowPref5, RowPref5Left } from "../styles/Preferencias"
import React, { useState, useEffect } from "react"
import { supabase } from "../../lib/supabase"

export const AlterarPref5 = ({ title, nextComponent, toPerfil, session }) => {
    const [pref5, setPref5] = useState([])
    const [activeMenosDe2, setActiveMenosDe2] = useState<boolean>(false)
    const [activeEntre2e5, setActiveEntre2e5] = useState<boolean>(false)
    const [activeEntre6e7, setActiveEntre6e7] = useState<boolean>(false)
    const [activeMaisDe8, setActiveMaisDe8] = useState<boolean>(false)

    const handleIconClick = (text) => {
        console.log(text)
        setPref5((prev) => {
            if (prev.includes(text)) {
                return prev.filter(item => item !== text);
            } else {
                return [...prev, text];
            }
        })
    }

    const handleSubmit = async () => {
        if (pref5.length == 0) {
            console.log(pref5)
        } else {
            console.log(pref5)
            const pref = pref5.join(" ; ")
            console.log(pref)
            console.log(session)
            const id = session
            const dados = pref
            
            
            const { data, error } = await supabase
                .from('preferences')
                .update({ pref5: dados })
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
            .select('pref5')
            .eq('id', session);

        if (error) {
            console.error('Erro ao buscar preferências:', error);
        } else if (preferences && preferences.length > 0) {
            const prefArray = preferences[0].pref5.split(' ; ');
            setPref5(prefArray);
        }
    }

    useEffect(() => {
        fetchPreferences()
    }, [])

    useEffect(() => {
        console.log(pref5);
        if (pref5.includes('Menos de 2')) {
            setActiveMenosDe2(true)
        }
        if (pref5.includes('Entre 2 e 5')) {
            setActiveEntre2e5(true)
        }
        if (pref5.includes('Entre 6 e 7')) {
            setActiveEntre6e7(true)
        }
        if (pref5.includes('Mais de 8')) {
            setActiveMaisDe8(true)
        }
    }, [pref5]);

    return (
        <>
            <Container>
                <Title>{title}</Title>
                <RowPref5>
                    <IconPref 
                        source={require('../../assets/preferencias5/menosDe2.png')}
                        sourceActive={require('../../assets/preferencias5/menosDe2Ativo.png')}
                        text={"Menos de 2\nsalários mínimos"}
                        active={activeMenosDe2}
                        onClick={() => handleIconClick("Menos de 2")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias5/entre2e5.png')}
                        sourceActive={require('../../assets/preferencias5/entre2e5Ativo.png')}
                        text={"Entre 2 e 5\nsalários mínimos"}
                        active={activeEntre2e5}
                        onClick={() => handleIconClick("Entre 2 e 5")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias5/entre6e7.png')}
                        sourceActive={require('../../assets/preferencias5/entre6e7Ativo.png')}
                        text={"Entre 6 e 7\nsalários mínimos"}
                        active={activeEntre6e7}
                        onClick={() => handleIconClick("Entre 6 e 7")}
                    />
                </RowPref5>
                <RowPref5Left>
                    <IconPref 
                        source={require('../../assets/preferencias5/maisDe8.png')}
                        sourceActive={require('../../assets/preferencias5/maisDe8Ativo.png')}
                        text={"Mais de 8 salários\nmínimos"}
                        active={activeMaisDe8}
                        onClick={() => handleIconClick("Mais de 8")}
                    />
                </RowPref5Left>
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