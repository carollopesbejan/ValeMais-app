import { FormButton } from "../FormButton"
import { IconPref } from "../IconPref"
import { Button, Container, ContainerButton, Row, SkipText, Title, Space, RowLeft, RowPref5, RowPref5Left } from "../styles/Preferencias"
import { useState, useEffect } from "react"
import { supabase } from "../../lib/supabase"

export const Preferencia5 = ({ title, nextComponent, toHome, session }) => {
    const [pref5, setPref5] = useState([])

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
            // console.log(session.user.email)
            // const id = session.user.email
            // const dados = pref
            
            
            // const { data, error } = await supabase
            //     .from('preferences')
            //     .update({ pref5: dados })
            //     .eq('id', id)
            //     .select()


            // console.log(data)

        }
        nextComponent()
    }

    const handleSkip = () => {
        toHome()
    }

    useEffect(() => {
        console.log(pref5);
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
                        onClick={() => handleIconClick("Menos de 2")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias5/entre2e5.png')}
                        sourceActive={require('../../assets/preferencias5/entre2e5Ativo.png')}
                        text={"Entre 2 e 5\nsalários mínimos"}
                        onClick={() => handleIconClick("Entre 2 e 5")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias5/entre6e7.png')}
                        sourceActive={require('../../assets/preferencias5/entre6e7Ativo.png')}
                        text={"Entre 6 e 7\nsalários mínimos"}
                        onClick={() => handleIconClick("Entre 6 e 7")}
                    />
                </RowPref5>
                <RowPref5Left>
                    <IconPref 
                        source={require('../../assets/preferencias5/maisDe8.png')}
                        sourceActive={require('../../assets/preferencias5/maisDe8Ativo.png')}
                        text={"Mais de 8 salários\nmínimos"}
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