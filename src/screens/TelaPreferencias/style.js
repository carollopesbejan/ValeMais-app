import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => (props.theme.colors.preferenciasBackgroundColor)};
    align-items: center;
    justify-content: center;

`;

export const ContainerButton = styled.View`
    width: 80%;
`;