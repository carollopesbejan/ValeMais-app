import { Container } from "./style";

export function TelaCadastro() {
    return (
        <Container>
            <input placeholder="email" type="email"></input>
            <input placeholder="senha" type="password"></input>
            <button>Cadastrar</button>
        </Container>
    )
}