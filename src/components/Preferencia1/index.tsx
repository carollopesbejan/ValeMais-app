import { Container, Title, Row, SkipText } from "./style"
import { IconPref } from "../IconPref"

export const Preferencia1 = ({ title }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Row>
                <IconPref 
                    path={require('../../assets/iconPref.svg')} 
                    text="Saúde"
                />
                <IconPref 
                    path={require('../../assets/iconPref.svg')} 
                    text="Saúde"
                />
                <IconPref 
                    path={require('../../assets/iconPref.svg')} 
                    text="Saúde"
                />
            </Row>
            <Row>
                <IconPref 
                    path={require('../../assets/iconPref.svg')} 
                    text="Saúde"
                />
                <IconPref 
                    path={require('../../assets/iconPref.svg')} 
                    text="Saúde"
                />
                <IconPref 
                    path={require('../../assets/iconPref.svg')} 
                    text="Saúde"
                />
            </Row>
            <Row>
                <IconPref 
                    path={require('../../assets/iconPref.svg')} 
                    text="Saúde"
                />
                <IconPref 
                    path={require('../../assets/iconPref.svg')} 
                    text="Saúde"
                />
                <IconPref 
                    path={require('../../assets/iconPref.svg')} 
                    text="Saúde"
                />
            </Row>

            <SkipText>Pular Preferências</SkipText>
        </Container>
    )
}