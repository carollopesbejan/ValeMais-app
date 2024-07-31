import { Container, Title, Row, SkipText } from "./style"
import { IconPref } from "../IconPref"

export const Preferencia1 = ({ title }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Row>
                <IconPref 
                    source={require('../../assets/preferencias1/saude.png')}
                    sourceActive={require('../../assets/preferencias1/saudeAtivo.png')}
                    text="Saúde"
                />
                <IconPref 
                    source={require('../../assets/preferencias1/cabelo.png')} 
                    sourceActive={require('../../assets/preferencias1/cabeloAtivo.png')}
                    text="Cabelo"
                />
                <IconPref 
                    source={require('../../assets/preferencias1/beleza.png')} 
                    sourceActive={require('../../assets/preferencias1/belezaAtivo.png')}
                    text="Beleza"
                />
            </Row>
            <Row>
                <IconPref 
                    source={require('../../assets/preferencias1/remedios.png')} 
                    sourceActive={require('../../assets/preferencias1/saudeAtivo.png')}
                    text="Remédios"
                />
                <IconPref 
                    source={require('../../assets/preferencias1/bebe.png')} 
                    sourceActive={require('../../assets/preferencias1/bebeAtivo.png')}
                    text={"Mamãe\ne bebê"}
                />
                <IconPref 
                    source={require('../../assets/preferencias1/cuidado.png')} 
                    sourceActive={require('../../assets/preferencias1/cuidadoAtivo.png')}
                    text={"Cuidados\nDiários"}
                />
            </Row>
            <Row>
                <IconPref 
                    source={require('../../assets/preferencias1/vitamina.png')} 
                    sourceActive={require('../../assets/preferencias1/vitaminaAtivo.png')}
                    text={"Vitaminas e\nSuplementos"}
                />
                <IconPref 
                    source={require('../../assets/preferencias1/dermo.png')} 
                    sourceActive={require('../../assets/preferencias1/dermoAtivo.png')}
                    text={"Dermo\nCosméticos"}
                />
                <IconPref 
                    source={require('../../assets/preferencias1/unhas.png')} 
                    sourceActive={require('../../assets/preferencias1/unhasAtivo.png')}
                    text="Unhas"
                />
            </Row>

            <SkipText>Pular Preferências</SkipText>
        </Container>
    )
}