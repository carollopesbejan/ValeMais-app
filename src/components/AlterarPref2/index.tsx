import { Container, Title, Row, SkipText, Button } from "../styles/Preferencias";
import { IconPref } from "../IconPref";
import React, { useState, useEffect } from "react";
import { FormButton } from "../FormButton";
import { ContainerButton } from "../styles/ContainerButton";
import { supabase } from "../../lib/supabase";

export const AlterarPref2 = ({ title, nextComponent, toPerfil, session }) => {
    const [pref2, setPref2] = useState([])
    const [activePfizer, setActivePfizer] = useState<boolean>(false)
    const [activeNovartis, setActiveNovartis] = useState<boolean>(false)
    const [activeRoche, setActiveRoche] = useState<boolean>(false)
    const [activeMerck, setActiveMerck] = useState<boolean>(false)
    const [activeJohnson, setActiveJohnson] = useState<boolean>(false)
    const [activeSanofi, setActiveSanofi] = useState<boolean>(false)
    const [activeAstrazeneca, setActiveAstrazeneca] = useState<boolean>(false)
    const [activeBayer, setActiveBayer] = useState<boolean>(false)
    const [activeAbbott, setActiveAbbott] = useState<boolean>(false)

    const handleIconClick = (text) => {
        console.log(text)
        setPref2((prev) => {
            if (prev.includes(text)) {
                return prev.filter(item => item !== text);
            } else {
                return [...prev, text];
            }
        })
    }

    const handleSubmit = async () => {
        console.log(pref2)
        const pref = pref2.join(" ; ")
        console.log(pref)
        console.log(session)
        const id = session
        const dados = pref
        
        
        const { data, error } = await supabase
            .from('preferences')
            .update({ pref2: dados })
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
            .select('pref2')
            .eq('id', session);

        if (error) {
            console.error('Erro ao buscar preferências:', error);
        } else if (preferences && preferences.length > 0) {
            const prefArray = preferences[0].pref2.split(' ; ');
            setPref2(prefArray);
        }
    }

    useEffect(() => {
        fetchPreferences()
    }, []);

    useEffect(() => {
        console.log(pref2);
        if (pref2.includes('Pfizer')) {
            setActivePfizer(true)
        }
        if (pref2.includes('Novartis')) {
            setActiveNovartis(true)
        }
        if (pref2.includes('Roche')) {
            setActiveRoche(true)
        }
        if (pref2.includes('Merck')) {
            setActiveMerck(true)
        }
        if (pref2.includes('Johnson and Johnson')) {
            setActiveJohnson(true)
        }
        if (pref2.includes('Sanofi')) {
            setActiveSanofi(true)
        }
        if (pref2.includes('Astrazeneca')) {
            setActiveAstrazeneca(true)
        }
        if (pref2.includes('Bayer')) {
            setActiveBayer(true)
        }
        if (pref2.includes('Abbott Laboratories')) {
            setActiveAbbott(true)
        }
    }, [pref2]); 

    return (
        <>
            <Container>
                <Title>{title}</Title>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias2/pfizer.png')}
                        sourceActive={require('../../assets/preferencias2/pfizerAtivo.png')}
                        text="Pfizer"
                        active={activePfizer}
                        onClick={() => handleIconClick("Pfizer")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias2/novartis.png')}
                        sourceActive={require('../../assets/preferencias2/novartisAtivo.png')}
                        text="Novartis"
                        active={activeNovartis}
                        onClick={() => handleIconClick("Novartis")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias2/roche.png')}
                        sourceActive={require('../../assets/preferencias2/rocheAtivo.png')}
                        text="Roche"
                        active={activeRoche}
                        onClick={() => handleIconClick("Roche")}
                    />
                </Row>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias2/merck.png')}
                        sourceActive={require('../../assets/preferencias2/merckAtivo.png')}
                        text="Merck"
                        active={activeMerck}
                        onClick={() => handleIconClick("Merck")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias2/johnson.png')}
                        sourceActive={require('../../assets/preferencias2/johnsonAtivo.png')}
                        text={"Johnson and\nJohnson"}
                        active={activeJohnson}
                        onClick={() => handleIconClick("Johnson and Johnson")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias2/sanofi.png')}
                        sourceActive={require('../../assets/preferencias2/sanofiAtivo.png')}
                        text="Sanofi"
                        active={activeSanofi}
                        onClick={() => handleIconClick("Sanofi")}
                    />
                </Row>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias2/astrazeneca.png')}
                        sourceActive={require('../../assets/preferencias2/astrazenecaAtivo.png')}
                        text="Astrazeneca"
                        active={activeAstrazeneca}
                        onClick={() => handleIconClick("Astrazeneca")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias2/bayer.png')}
                        sourceActive={require('../../assets/preferencias2/bayerAtivo.png')}
                        text="Bayer"
                        active={activeBayer}
                        onClick={() => handleIconClick("Bayer")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias2/abbott.png')}
                        sourceActive={require('../../assets/preferencias2/abbottAtivo.png')}
                        text={"Abbott\nLaboratories"}
                        active={activeAbbott}
                        onClick={() => handleIconClick("Abbott Laboratories")}
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