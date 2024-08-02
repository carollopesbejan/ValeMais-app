import { Preferencia1 } from "../../components/Preferencia1";
import { Preferencia2 } from "../../components/Preferencia2";
import { Container } from "./style";
import { useState } from "react";

export const Preferencias = ({ navigation }) => {
    const [page, setPage] = useState(0)

    const nextComponent = () => {
        setPage((prevPage) => prevPage + 1)
    }

    const toHome = () => {
        navigation.navigate("TelaHome")
    }

    const components = [
        <Preferencia1 
                title="Escolha os categorias de produtos que você possui mais interesse"
                nextComponent={nextComponent}
                toHome={toHome}
        />,
        <Preferencia2 
        />
    ]
    return(
        <Container>
            {components[page]}
        </Container>
    )
}