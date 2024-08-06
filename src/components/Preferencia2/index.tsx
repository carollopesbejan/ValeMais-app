import { FormButton } from "../FormButton"
import { IconPref } from "../IconPref"
import { Button, Container, ContainerButton, Row, SkipText, Title } from "../styles/Preferencias"
import { useState, useEffect } from "react"

export const Preferencia2 = ({ title, nextComponent, toHome, session }) => {
    const [pref2, setPref2] = useState([])

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
        if (pref2.length == 0) {
            console.log(pref2)
        } else {
            console.log(pref2)
            const pref = pref2.join(" ; ")
            console.log(pref)
            // console.log(session.user.email)
            // const id = session.user.email
            // const dados = pref
            
            // const { data, error } = await supabase
            // .from('preferences')
            // .insert([
            // { id: id, pref1: dados },
            // ])
            // .select()

            // console.log(data)

        }
        nextComponent()
    }

    const handleSkip = () => {
        toHome()
    }

    useEffect(() => {
        console.log(pref2);
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
                        onClick={() => handleIconClick("Pfizer")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias2/novartis.png')}
                        sourceActive={require('../../assets/preferencias2/novartisAtivo.png')}
                        text="Novartis"
                        onClick={() => handleIconClick("Novartis")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias2/roche.png')}
                        sourceActive={require('../../assets/preferencias2/rocheAtivo.png')}
                        text="Roche"
                        onClick={() => handleIconClick("Roche")}
                    />
                </Row>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias2/merck.png')}
                        sourceActive={require('../../assets/preferencias2/merckAtivo.png')}
                        text="Merck"
                        onClick={() => handleIconClick("Merck")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias2/johnson.png')}
                        sourceActive={require('../../assets/preferencias2/johnsonAtivo.png')}
                        text={"Johnson and\nJohnson"}
                        onClick={() => handleIconClick("Johnson and Johnson")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias2/sanofi.png')}
                        sourceActive={require('../../assets/preferencias2/sanofiAtivo.png')}
                        text="Sanofi"
                        onClick={() => handleIconClick("Sanofi")}
                    />
                </Row>
                <Row>
                    <IconPref 
                        source={require('../../assets/preferencias2/astrazeneca.png')}
                        sourceActive={require('../../assets/preferencias2/astrazenecaAtivo.png')}
                        text="Astrazeneca"
                        onClick={() => handleIconClick("Astrazeneca")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias2/bayer.png')}
                        sourceActive={require('../../assets/preferencias2/bayerAtivo.png')}
                        text="Bayer"
                        onClick={() => handleIconClick("Bayer")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias2/abbott.png')}
                        sourceActive={require('../../assets/preferencias2/abbottAtivo.png')}
                        text={"Abbott\nLaboratories"}
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