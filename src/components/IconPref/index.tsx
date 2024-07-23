import { ContainerIcon, Description, Icon } from "./style"

export const IconPref = ({ path, text }) => {
    return (
        // Transformar em botão, mudar a cor ao pressionar o icone e receber uma função que salva o text em um estado local 
        <ContainerIcon>
            <Icon source={path}/>
            <Description>{text}</Description>
        </ContainerIcon>
    )
}