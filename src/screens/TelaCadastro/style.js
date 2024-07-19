import styled from "styled-components/native";

const backgroundColor = "#F3F1F4";

export const Container = styled.View`
    flex: 1;
    background-color: ${backgroundColor};
    align-items: center;
    justify-content: space-evenly;
`;

export const ButtonArrow = styled.Pressable`
    align-self: flex-start;
    margin-left: 10%;
    color: #E8A009;
`;

export const ContainerForms = styled.View`
    width: 80%;
    gap: 16px;
`;

export const Input = styled.TextInput`
    border: 1px solid black;
`;

export const Button = styled.Pressable`
    width: 80%;
    margin-top: 48px;
    background-color: green;
`;

export const Text = styled.Text`
    font-size: 16px;
    text-align: center;
`;
