import { Container, Title, Row, SkipText, Button } from "../styles/Preferencias";
import { IconPref } from "../IconPref";
import React, { useState, useEffect } from "react";
import { FormButton } from "../FormButton";
import { ContainerButton } from "../styles/ContainerButton";
import { supabase } from "../../lib/supabase";

export const AlterarPref1 = ({ title, nextComponent, toPerfil, session }) => {
    const [pref1, setPref1] = useState([])
    const [activeSaude, setActiveSaude] = useState<boolean>(false)
    const [activeCabelo, setActiveCabelo] = useState<boolean>(false)
    const [activeBeleza, setActiveBeleza] = useState<boolean>(false)
    const [activeRemedios, setActiveRemedios] = useState<boolean>(false)
    const [activeBebe, setActiveBebe] = useState<boolean>(false)
    const [activeCuidado, setActiveCuidado] = useState<boolean>(false)
    const [activeVitamina, setActiveVitamina] = useState<boolean>(false)
    const [activeDermo, setActiveDermo] = useState<boolean>(false)
    const [activeUnhas, setActiveUnhas] = useState<boolean>(false)

    const handleIconClick = (text) => {
        console.log(text)
        setPref1((prev) => {
            if (prev.includes(text)) {
                return prev.filter(item => item !== text);
            } else {
                return [...prev, text];
            }
        })
    }

    const handleSubmit = async () => {
        console.log(pref1)
        const pref = pref1.join(" ; ")
        console.log(pref)
        console.log(session)
        const id = session
        const dados = pref
        
        
        const { data, error } = await supabase
            .from('preferences')
            .update({ pref1: dados })
            .eq('id', id)
            .select()


        console.log(data)

        nextComponent()
    }

    const handleSkip = () => {
        toPerfil()
    }

    const fetchPreferences = async () => {
        const { data: preferences, error } = await supabase
            .from('preferences')
            .select('pref1')
            .eq('id', session);

        if (error) {
            console.error('Erro ao buscar preferências:', error);
        } else if (preferences && preferences.length > 0) {
            const prefArray = preferences[0].pref1.split(' ; ');
            setPref1(prefArray);
        }
    }

    useEffect(() => {
        fetchPreferences()
    }, []);

    useEffect(() => {
        console.log(pref1);
        if (pref1.includes('Saúde')) {
            setActiveSaude(true)
        }
        if (pref1.includes('Cabelo')) {
            setActiveCabelo(true)
        }
        if (pref1.includes('Beleza')) {
            setActiveBeleza(true)
        }
        if (pref1.includes('Remédios')) {
            setActiveRemedios(true)
        }
        if (pref1.includes('Mamãe e bebê')) {
            setActiveBebe(true)
        }
        if (pref1.includes('Cuidados Diários')) {
            setActiveCuidado(true)
        }
        if (pref1.includes('Vitaminas e Suplementos')) {
            setActiveVitamina(true)
        }
        if (pref1.includes('Dermo Cosméticos')) {
            setActiveDermo(true)
        }
        if (pref1.includes('Unhas')) {
            setActiveUnhas(true)
        }
    }, [pref1]); 

    return (
        <>
            <Container>
                <Title>{title}</Title>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias1/saude.png')}
                        sourceActive={require('../../assets/preferencias1/saudeAtivo.png')}
                        text="Saúde"
                        active={activeSaude}
                        onClick={() => handleIconClick("Saúde")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias1/cabelo.png')} 
                        sourceActive={require('../../assets/preferencias1/cabeloAtivo.png')}
                        text="Cabelo"
                        active={activeCabelo}
                        onClick={() => handleIconClick("Cabelo")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias1/beleza.png')} 
                        sourceActive={require('../../assets/preferencias1/belezaAtivo.png')}
                        text="Beleza"
                        active={activeBeleza}
                        onClick={() => handleIconClick("Beleza")}
                    />
                </Row>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias1/remedios.png')} 
                        sourceActive={require('../../assets/preferencias1/remediosAtivo.png')}
                        text="Remédios"
                        active={activeRemedios}
                        onClick={() => handleIconClick("Remédios")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias1/bebe.png')} 
                        sourceActive={require('../../assets/preferencias1/bebeAtivo.png')}
                        text={"Mamãe\ne bebê"}
                        active={activeBebe}
                        onClick={() => handleIconClick("Mamãe e bebê")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias1/cuidado.png')} 
                        sourceActive={require('../../assets/preferencias1/cuidadoAtivo.png')}
                        text={"Cuidados\nDiários"}
                        active={activeCuidado}
                        onClick={() => handleIconClick("Cuidados Diários")}
                    />
                </Row>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias1/vitamina.png')} 
                        sourceActive={require('../../assets/preferencias1/vitaminaAtivo.png')}
                        text={"Vitaminas e\nSuplementos"}
                        active={activeVitamina}
                        onClick={() => handleIconClick("Vitaminas e Suplementos")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias1/dermo.png')} 
                        sourceActive={require('../../assets/preferencias1/dermoAtivo.png')}
                        text={"Dermo\nCosméticos"}
                        active={activeDermo}
                        onClick={() => handleIconClick("Dermo Cosméticos")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias1/unhas.png')} 
                        sourceActive={require('../../assets/preferencias1/unhasAtivo.png')}
                        text="Unhas"
                        active={activeUnhas}
                        onClick={() => handleIconClick("Unhas")}
                    />
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