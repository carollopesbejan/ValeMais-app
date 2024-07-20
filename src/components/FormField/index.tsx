import { Label, Input, Container } from "./style"

export const FormField = ({ label, placeholder, fn, hidden }) => {
    return (
        // colocar container envolvendo
        <Container> 
            <Label>{label}</Label>
            <Input 
                placeholder={placeholder} 
                onChangeText={fn}
                secureTextEntry={hidden}>
            </Input>
        </Container>
    )
}