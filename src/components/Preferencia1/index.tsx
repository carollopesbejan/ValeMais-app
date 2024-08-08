import { Container, Title, Row, SkipText, Button } from "../styles/Preferencias";
import { IconPref } from "../IconPref";
import { useState, useEffect } from "react";
import { FormButton } from "../FormButton";
import { ContainerButton } from "../../screens/TelaPreferencias/style";
import { supabase } from "../../lib/supabase";

export const Preferencia1 = ({ title, nextComponent, toHome, session }) => {
    const [pref1, setPref1] = useState([])

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
        if (pref1.length == 0) {
            console.log(pref1)
        } else {
            console.log(pref1)
            const pref = pref1.join(" ; ")
            console.log(pref)
            console.log(session.user.email)
            const id = session.user.email
            const dados = pref
            
            const { data, error } = await supabase
            .from('preferences')
            .insert([
            { id: id, pref1: dados },
            ])
            .select()

            console.log(data)

        }
        nextComponent()
    }

    const handleSkip = () => {
        toHome()
    }

    useEffect(() => {
        console.log(pref1);
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
                        onClick={() => handleIconClick("Saúde")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias1/cabelo.png')} 
                        sourceActive={require('../../assets/preferencias1/cabeloAtivo.png')}
                        text="Cabelo"
                        onClick={() => handleIconClick("Cabelo")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias1/beleza.png')} 
                        sourceActive={require('../../assets/preferencias1/belezaAtivo.png')}
                        text="Beleza"
                        onClick={() => handleIconClick("Beleza")}
                    />
                </Row>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias1/remedios.png')} 
                        sourceActive={require('../../assets/preferencias1/remediosAtivo.png')}
                        text="Remédios"
                        onClick={() => handleIconClick("Remédios")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias1/bebe.png')} 
                        sourceActive={require('../../assets/preferencias1/bebeAtivo.png')}
                        text={"Mamãe\ne bebê"}
                        onClick={() => handleIconClick("Mamãe e bebê")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias1/cuidado.png')} 
                        sourceActive={require('../../assets/preferencias1/cuidadoAtivo.png')}
                        text={"Cuidados\nDiários"}
                        onClick={() => handleIconClick("Cuidados Diários")}
                    />
                </Row>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias1/vitamina.png')} 
                        sourceActive={require('../../assets/preferencias1/vitaminaAtivo.png')}
                        text={"Vitaminas e\nSuplementos"}
                        onClick={() => handleIconClick("Vitaminas e Suplementos")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias1/dermo.png')} 
                        sourceActive={require('../../assets/preferencias1/dermoAtivo.png')}
                        text={"Dermo\nCosméticos"}
                        onClick={() => handleIconClick("Dermo Cosméticos")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias1/unhas.png')} 
                        sourceActive={require('../../assets/preferencias1/unhasAtivo.png')}
                        text="Unhas"
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