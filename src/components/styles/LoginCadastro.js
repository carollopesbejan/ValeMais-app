import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    align-items: center;
    justify-content: space-evenly;
`;