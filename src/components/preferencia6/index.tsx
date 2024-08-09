import { FormButton } from "../FormButton"
import { IconPref } from "../IconPref"
import { Button, Container, ContainerButton, Row, SkipText, Title, RowLeft, Space } from "../styles/Preferencias"
import { useState, useEffect } from "react"
import { supabase } from "../../lib/supabase"

export const Preferencia6 = ({ title, toHome, session }) => {
    const [pref6, setPref6] = useState([])

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
            // console.log(session.user.email)
            // const id = session.user.email
            // const dados = pref
            
            
            // const { data, error } = await supabase
            //     .from('preferences')
            //     .update({ pref6: dados })
            //     .eq('id', id)
            //     .select()


            // console.log(data)

        }
        toHome()
    }

    const handleSkip = () => {
        toHome()
    }

    useEffect(() => {
        console.log(pref6);
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
                        onClick={() => handleIconClick("whatsapp")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias6/notificacao.png')}
                        sourceActive={require('../../assets/preferencias6/notificacaoAtivo.png')}
                        text="Notificação"
                        onClick={() => handleIconClick("notificação")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias6/email.png')}
                        sourceActive={require('../../assets/preferencias6/emailAtivo.png')}
                        text="E-mail"
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