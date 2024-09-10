import { FormButton } from "../FormButton"
import { IconPref } from "../IconPref"
import { Button, Container, ContainerButton, Row, SkipText, Title, RowLeft, Space } from "../styles/Preferencias"
import { useState, useEffect } from "react"
import { supabase } from "../../lib/supabase"

export const Preferencia4 = ({ title, nextComponent, toHome, session }) => {
    const [pref4, setPref4] = useState([])

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
            console.log(session.user.email)
            const id = session.user.email
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
        toHome()
    }

    useEffect(() => {
        console.log(pref4);
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
                        onClick={() => handleIconClick("1 ou 2")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias4/media.png')}
                        sourceActive={require('../../assets/preferencias4/mediaAtivo.png')}
                        text={"Média (3 ou 4\nmembros)"}
                        onClick={() => handleIconClick("3 ou 4")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias4/grande.png')}
                        sourceActive={require('../../assets/preferencias4/grandeAtivo.png')}
                        text={"Grande (5 ou\nmais membros)"}
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