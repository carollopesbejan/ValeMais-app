import { FormButton } from "../FormButton"
import { IconPref } from "../IconPref"
import { Button, Container, ContainerButton, Row, SkipText, Title, Space, RowLeft } from "../styles/Preferencias"
import { useState, useEffect } from "react"
import { supabase } from "../../lib/supabase"

export const Preferencia3 = ({ title, nextComponent, toHome, session }) => {
    const [pref3, setPref3] = useState([])

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
            // console.log(session.user.email)
            // const id = session.user.email
            // const dados = pref
            
            
            // const { data, error } = await supabase
            //     .from('preferences')
            //     .update({ pref3: dados })
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
        console.log(pref3);
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
                        onClick={() => handleIconClick("1")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias3/1ou2.png')}
                        sourceActive={require('../../assets/preferencias3/1ou2Ativo.png')}
                        text={"Entre 1 e 2\nvezes"}
                        onClick={() => handleIconClick("1 ou 2")}
                    />
                    <IconPref 
                        source={require('../../assets/preferencias3/3ou4.png')}
                        sourceActive={require('../../assets/preferencias3/3ou4Ativo.png')}
                        text={"Entre 3 e 4\nvezes"}
                        onClick={() => handleIconClick("3 ou 4")}
                    />
                </Row>
                <RowLeft>
                    <IconPref 
                        source={require('../../assets/preferencias3/5.png')}
                        sourceActive={require('../../assets/preferencias3/5Ativo.png')}
                        text={"Acima de 5\nvezes"}
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